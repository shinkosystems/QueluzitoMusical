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
    // Duas oitavas completas — notas cromáticas com índice 0=C a 23=B
    // Tipo: 'w' = tecla branca, 'b' = tecla preta
    const allNotes: { index: number; type: 'w' | 'b'; label: string }[] = [
      { index: 0,  type: 'w', label: 'C'  },
      { index: 1,  type: 'b', label: 'C#' },
      { index: 2,  type: 'w', label: 'D'  },
      { index: 3,  type: 'b', label: 'D#' },
      { index: 4,  type: 'w', label: 'E'  },
      { index: 5,  type: 'w', label: 'F'  },
      { index: 6,  type: 'b', label: 'F#' },
      { index: 7,  type: 'w', label: 'G'  },
      { index: 8,  type: 'b', label: 'G#' },
      { index: 9,  type: 'w', label: 'A'  },
      { index: 10, type: 'b', label: 'A#' },
      { index: 11, type: 'w', label: 'B'  },
      { index: 12, type: 'w', label: 'C'  },
      { index: 13, type: 'b', label: 'C#' },
      { index: 14, type: 'w', label: 'D'  },
      { index: 15, type: 'b', label: 'D#' },
      { index: 16, type: 'w', label: 'E'  },
      { index: 17, type: 'w', label: 'F'  },
      { index: 18, type: 'b', label: 'F#' },
      { index: 19, type: 'w', label: 'G'  },
      { index: 20, type: 'b', label: 'G#' },
      { index: 21, type: 'w', label: 'A'  },
      { index: 22, type: 'b', label: 'A#' },
      { index: 23, type: 'w', label: 'B'  },
    ];

    const activeKeys = getChordKeys(chord);

    // Dimensões calculadas para caber em ~260px de largura
    const wW = 19;   // largura de cada tecla branca
    const wH = 72;   // altura das teclas brancas
    const bW = 11;   // largura de cada tecla preta
    const bH = 44;   // altura das teclas pretas
    const gap = 1;   // espaço entre teclas brancas
    const padX = 3;  // padding horizontal

    // Calcular a posição x de cada tecla branca em ordem
    const whiteKeys = allNotes.filter(n => n.type === 'w');
    const whitePositions: Record<number, number> = {};
    whiteKeys.forEach((key, i) => {
      whitePositions[key.index] = padX + i * (wW + gap);
    });

    const totalWidth = padX + whiteKeys.length * (wW + gap) + padX;
    const svgHeight = wH + 12; // margem inferior para o indicador

    // Calcular a posição x de cada tecla preta:
    // Uma tecla preta (semitom) sempre fica entre os dois vizinhos brancos.
    // Pega o índice do branco anterior e do branco posterior e centraliza entre eles.
    const blackKeys = allNotes.filter(n => n.type === 'b');

    const getBlackX = (blackIndex: number): number => {
      const prevWhite = allNotes.slice(0, blackIndex).reverse().find(n => n.type === 'w');
      const nextWhite = allNotes.slice(blackIndex + 1).find(n => n.type === 'w');
      if (!prevWhite || !nextWhite) return 0;
      const x1 = whitePositions[prevWhite.index] + wW; // borda direita da tecla branca anterior
      const x2 = whitePositions[nextWhite.index];      // borda esquerda da tecla branca posterior
      return (x1 + x2) / 2 - bW / 2;                  // centralizado entre as duas brancas
    };

    return (
      <svg
        width="100%"
        viewBox={`0 0 ${totalWidth} ${svgHeight}`}
        style={{ background: '#111827', borderRadius: '8px', display: 'block' }}
        aria-hidden="true"
      >
        {/* Teclas brancas — desenhadas primeiro (camada inferior) */}
        {whiteKeys.map((key) => {
          const x = whitePositions[key.index];
          const isActive = activeKeys.includes(key.index);
          return (
            <g key={`w-${key.index}`}>
              <rect
                x={x}
                y={3}
                width={wW}
                height={wH}
                fill={isActive ? '#F97316' : '#F9FAFC'}
                stroke="#1F2937"
                strokeWidth="0.8"
                rx="2"
              />
              {isActive && (
                <circle
                  cx={x + wW / 2}
                  cy={3 + wH - 9}
                  r={4}
                  fill="#fff"
                  opacity={0.9}
                />
              )}
            </g>
          );
        })}

        {/* Teclas pretas — desenhadas por cima (camada superior) */}
        {blackKeys.map((key) => {
          const x = getBlackX(key.index);
          const isActive = activeKeys.includes(key.index);
          return (
            <g key={`b-${key.index}`}>
              <rect
                x={x}
                y={3}
                width={bW}
                height={bH}
                fill={isActive ? '#FB923C' : '#111827'}
                stroke="#374151"
                strokeWidth="0.8"
                rx="1.5"
              />
              {isActive && (
                <circle
                  cx={x + bW / 2}
                  cy={3 + bH - 7}
                  r={3}
                  fill="#fff"
                  opacity={0.9}
                />
              )}
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
