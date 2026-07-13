// @sos-edit: false
import React from 'react';
import { getChordKeys } from '../utils/music';
import { getGuitarChord } from '../utils/guitar';

interface ChordDiagramProps {
  chord: string;
  instrument?: 'teclado' | 'violao';
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({ chord, instrument = 'teclado' }) => {
  // --- RENDERIZADOR DO TECLADO ---
  const renderTeclado = () => {
    const whiteKeys = [
      { index: 0, label: 'C' }, { index: 2, label: 'D' }, { index: 4, label: 'E' },
      { index: 5, label: 'F' }, { index: 7, label: 'G' }, { index: 9, label: 'A' },
      { index: 11, label: 'B' }, { index: 12, label: 'C' }, { index: 14, label: 'D' },
      { index: 16, label: 'E' }, { index: 17, label: 'F' }, { index: 19, label: 'G' },
      { index: 21, label: 'A' }, { index: 23, label: 'B' }
    ];

    const blackKeys = [
      { index: 1, x: 18 }, { index: 3, x: 42 }, { index: 6, x: 80 }, { index: 8, x: 104 },
      { index: 10, x: 128 }, { index: 13, x: 168 }, { index: 15, x: 192 },
      { index: 18, x: 230 }, { index: 20, x: 254 }, { index: 22, x: 278 }
    ];

    const activeKeys = getChordKeys(chord);
    const whiteWidth = 22;
    const whiteHeight = 80;
    const blackWidth = 12;
    const blackHeight = 48;

    return (
      <svg width="310" height="90" viewBox="0 0 310 90" style={{ background: '#111827', borderRadius: '8px', padding: '5px' }}>
        {whiteKeys.map((key, idx) => {
          const x = idx * (whiteWidth + 1) + 2;
          const isActive = activeKeys.includes(key.index);
          return (
            <g key={key.index}>
              <rect
                x={x}
                y={2}
                width={whiteWidth}
                height={whiteHeight}
                fill={isActive ? '#F97316' : '#F9FAFC'}
                stroke="#0B0F19"
                strokeWidth="1"
                rx="2"
              />
              {isActive && <circle cx={x + whiteWidth / 2} cy={whiteHeight - 12} r="4.5" fill="#FFF" />}
            </g>
          );
        })}

        {blackKeys.map((key) => {
          const isActive = activeKeys.includes(key.index);
          const x = key.x;
          return (
            <g key={key.index}>
              <rect
                x={x}
                y={2}
                width={blackWidth}
                height={blackHeight}
                fill={isActive ? '#FB923C' : '#1F2937'}
                stroke="#0B0F19"
                strokeWidth="1"
                rx="1"
              />
              {isActive && <circle cx={x + blackWidth / 2} cy={blackHeight - 8} r="3" fill="#FFF" />}
            </g>
          );
        })}
      </svg>
    );
  };

  // --- RENDERIZADOR DO VIOLÃO ---
  const renderViolao = () => {
    const guitarChord = getGuitarChord(chord);

    if (!guitarChord) {
      return (
        <div style={{
          height: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#111827',
          color: '#6B7280',
          fontSize: '0.8rem',
          borderRadius: '8px',
          padding: '10px'
        }}>
          Posição de violão indisponível. Veja no teclado.
        </div>
      );
    }

    const { frets, baseFret = 1 } = guitarChord;
    // Dimensões do diagrama do violão
    const width = 180;
    const height = 90;
    const numFrets = 4; // Exibe 4 trastes
    
    // Coordenadas x para as 6 cordas (E A D G B e)
    const stringsX = [35, 55, 75, 95, 115, 135];

    // Coordenadas y para os trastes
    const startY = 20;
    const fretGap = 15;
    const fretsY = Array.from({ length: numFrets + 1 }, (_, i) => startY + i * fretGap);

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ background: '#111827', borderRadius: '8px', padding: '2px' }}>
        {/* Nome dos trastes na lateral esquerda se baseFret > 1 */}
        {baseFret > 1 && (
          <text x="12" y={startY + fretGap / 2 + 3} fill="#FB923C" fontSize="10" fontWeight="bold" textAnchor="start">
            {baseFret}ª
          </text>
        )}

        {/* Linhas horizontais (trastes) */}
        {fretsY.map((y, idx) => (
          <line
            key={idx}
            x1={stringsX[0]}
            y1={y}
            x2={stringsX[stringsX.length - 1]}
            y2={y}
            stroke={idx === 0 && baseFret === 1 ? '#FFF' : '#4B5563'}
            strokeWidth={idx === 0 && baseFret === 1 ? '3' : '1'}
          />
        ))}

        {/* Linhas verticais (cordas) */}
        {stringsX.map((x, idx) => (
          <line
            key={idx}
            x1={x}
            y1={startY}
            x2={x}
            y2={fretsY[fretsY.length - 1]}
            stroke="#9CA3AF"
            strokeWidth={1 + (5 - idx) * 0.3} // Deixar cordas graves mais grossas
          />
        ))}

        {/* Bolinhas (dedilhados) e marcadores soltos/mutados (X / O) */}
        {frets.map((fret, stringIdx) => {
          const x = stringsX[stringIdx];
          
          if (fret === -1) {
            // Corda não tocada (X)
            return (
              <text key={stringIdx} x={x} y={12} fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">
                ✕
              </text>
            );
          } else if (fret === 0) {
            // Corda solta (O)
            return (
              <circle key={stringIdx} cx={x} cy={10} r="3" fill="none" stroke="#10B981" strokeWidth="1.5" />
            );
          } else {
            // Corda pressionada (Bolinha)
            // Calcula a casa relativa baseada no baseFret
            const relativeFret = fret - baseFret + 1;
            if (relativeFret >= 1 && relativeFret <= numFrets) {
              const y = startY + (relativeFret - 1) * fretGap + fretGap / 2;
              return (
                <circle key={stringIdx} cx={x} cy={y} r="5" fill="#F97316" />
              );
            }
            return null;
          }
        })}
      </svg>
    );
  };

  return (
    <div className="chord-diagram" style={{ textAlign: 'center' }} aria-label={`Diagrama de acorde para ${chord}`}>
      <div className="chord-name">{chord}</div>
      {instrument === 'teclado' ? renderTeclado() : renderViolao()}
    </div>
  );
};
