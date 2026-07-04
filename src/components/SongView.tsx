// @sos-edit: false
import React, { useState, useEffect, useRef } from 'react';
import { Song } from '../data/songs';
import { transposeChord } from '../utils/music';
import { ChordDiagram } from './ChordDiagram';

interface SongViewProps {
  song: Song;
  onBack: () => void;
  onSaveSong: (songId: string, updatedContent: string, updatedKey: string) => void;
}

export const SongView: React.FC<SongViewProps> = ({ song, onBack, onSaveSong }) => {
  const [transposeLevel, setTransposeLevel] = useState(0);
  const [fontSize, setFontSize] = useState(16); // px
  const [hideChords, setHideChords] = useState(false);
  
  // Estados para o Ambiente de Edição
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(song.content);
  const [editKey, setEditKey] = useState(song.key);

  // Rolagem automática
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(2); // 1 a 5
  const scrollIntervalRef = useRef<number | null>(null);

  // Sincroniza estado de edição se a música mudar
  useEffect(() => {
    setEditContent(song.content);
    setEditKey(song.key);
    setIsEditing(false);
    setTransposeLevel(0);
  }, [song]);

  // Transpor tom em semitones
  const handleTranspose = (amount: number) => {
    setTransposeLevel(prev => {
      const next = prev + amount;
      if (next < -12) return -12;
      if (next > 12) return 12;
      return next;
    });
  };

  // Zoom de fonte
  const handleZoom = (amount: number) => {
    setFontSize(prev => Math.min(Math.max(12, prev + amount), 32));
  };

  // Controle de rolagem automática
  useEffect(() => {
    if (isScrolling) {
      const intervalTime = 100 / scrollSpeed;
      scrollIntervalRef.current = window.setInterval(() => {
        window.scrollBy({ top: 1, behavior: 'auto' });
      }, intervalTime);
    } else {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isScrolling, scrollSpeed]);

  // Atalhos de Teclado Acessíveis
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 's' || e.key === 'S' || e.key === ' ') {
        e.preventDefault();
        setIsScrolling(prev => !prev);
      } else if (e.key === '+') {
        e.preventDefault();
        handleZoom(2);
      } else if (e.key === '-') {
        e.preventDefault();
        handleZoom(-2);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Processa e extrai todos os acordes únicos da cifra para exibir diagramas
  const getUniqueChords = (contentString = song.content): string[] => {
    const regex = /\[([^\]]+)\]/g;
    const chords: string[] = [];
    let match;
    while ((match = regex.exec(contentString)) !== null) {
      const transposed = transposeChord(match[1], transposeLevel);
      if (!chords.includes(transposed)) {
        chords.push(transposed);
      }
    }
    return chords;
  };

  // Renderiza a cifra dividida em linhas e segmentos (acordes + sílabas)
  const renderCifra = (contentString = song.content) => {
    const lines = contentString.trim().split('\n');

    return lines.map((line, lineIdx) => {
      if (line.trim() === '') {
        return <div key={lineIdx} style={{ height: '1.5em' }} aria-hidden="true" />;
      }

      if (line.startsWith('#') || (line.startsWith('(') && line.endsWith(')'))) {
        return <div key={lineIdx} className="comment-line">{line}</div>;
      }

      const segments: { chord: string; text: string }[] = [];
      const segmentRegex = /(?:\[([^\]]+)\])?([^\[]*)/g;
      let match;
      let hasChords = false;

      while ((match = segmentRegex.exec(line)) !== null) {
        const chord = match[1] || '';
        const text = match[2] || '';
        
        if (chord || text) {
          segments.push({
            chord: chord ? transposeChord(chord, transposeLevel) : '',
            text
          });
          if (chord) hasChords = true;
        }
        if (segmentRegex.lastIndex === match.index) {
          segmentRegex.lastIndex++;
        }
      }

      return (
        <div key={lineIdx} className="cifra-line" style={{ marginTop: hasChords && !hideChords ? '1.2em' : '0.2em' }}>
          {segments.map((seg, segIdx) => (
            <span key={segIdx} className="cifra-segment">
              {seg.chord && !hideChords && (
                <span className="cifra-chord" aria-hidden="true">
                  {seg.chord}
                </span>
              )}
              <span className="cifra-text">{seg.text}</span>
            </span>
          ))}
        </div>
      );
    });
  };

  const handleSave = () => {
    onSaveSong(song.id, editContent, editKey);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(song.content);
    setEditKey(song.key);
    setIsEditing(false);
  };

  const uniqueChords = getUniqueChords(isEditing ? editContent : song.content);

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      
      {/* Barra superior de navegação da música */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <button 
          onClick={onBack}
          className="btn-ctrl"
          style={{ width: 'fit-content', padding: '10px 20px', gap: '8px' }}
          aria-label="Voltar para a lista de músicas"
        >
          ⬅️ Voltar ao Catálogo
        </button>

        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="btn-ctrl"
            style={{ width: 'fit-content', padding: '10px 20px', gap: '8px', border: '1px solid var(--primary)', color: 'var(--primary)' }}
            aria-label="Editar cifra e letra"
          >
            ✏️ Editar Cifra
          </button>
        )}
      </div>

      {/* Cabeçalho da Música */}
      <header style={{ marginTop: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          {song.title} {isEditing && <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>(Modo Edição)</span>}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '4px' }}>
          {song.artist} | Tom original: <strong style={{ color: 'var(--primary)' }}>{isEditing ? editKey : song.key}</strong>
        </p>
      </header>

      {/* Layout de Edição */}
      {isEditing ? (
        <div className="cifra-layout" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Formulário de Edição */}
          <main className="cifra-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)' }}>Editor de Cifra</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="edit-key-input" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>TOM DA MÚSICA</label>
              <input 
                id="edit-key-input"
                type="text" 
                value={editKey} 
                onChange={(e) => setEditKey(e.target.value)} 
                className="btn-ctrl"
                style={{ width: '120px', textAlign: 'center', background: 'var(--bg-main)', cursor: 'text' }}
                placeholder="Ex: Cm, G, F#"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              <label htmlFor="edit-content-input" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>LETRA E CIFRA (FORMATO CHORDPRO)</label>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Coloque as cifras entre colchetes exatamente antes da sílaba onde o acorde deve soar. Ex: <code>[Cm]Toda se[Ab]mente</code>.
              </p>
              <textarea 
                id="edit-content-input"
                value={editContent} 
                onChange={(e) => setEditContent(e.target.value)} 
                style={{ 
                  width: '100%', 
                  minHeight: '350px', 
                  fontFamily: 'var(--font-cifra)', 
                  fontSize: '14px', 
                  backgroundColor: 'var(--bg-main)', 
                  color: 'var(--text-primary)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '8px', 
                  padding: '16px',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <button 
                onClick={handleSave} 
                className="btn-ctrl active"
                style={{ padding: '12px 24px' }}
              >
                💾 Salvar Alterações
              </button>
              <button 
                onClick={handleCancel} 
                className="btn-ctrl"
                style={{ padding: '12px 24px' }}
              >
                ❌ Cancelar
              </button>
            </div>
          </main>

          {/* Preview ao vivo na coluna da direita */}
          <aside className="cifra-container" style={{ fontSize: `${fontSize}px` }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '16px' }}>Preview em Tempo Real</h2>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              {renderCifra(editContent)}
            </div>
          </aside>
        </div>
      ) : (
        /* Layout de Visualização Normal */
        <div className="cifra-layout">
          {/* Coluna de Controles (Esquerda) */}
          <aside className="sidebar-controls" aria-label="Controles de exibição e rolagem">
            <div className="control-group">
              <label>Tamanho do Texto</label>
              <div className="control-buttons">
                <button onClick={() => handleZoom(-2)} className="btn-ctrl" aria-label="Diminuir fonte">-</button>
                <button onClick={() => setFontSize(16)} className="btn-ctrl" aria-label="Restaurar tamanho padrão">A</button>
                <button onClick={() => handleZoom(2)} className="btn-ctrl" aria-label="Aumentar fonte">+</button>
              </div>
            </div>

            <div className="control-group">
              <label>Tom / Afinação</label>
              <div className="control-buttons">
                <button onClick={() => handleTranspose(-1)} className="btn-ctrl" aria-label="Diminuir meio tom">♭</button>
                <button 
                  onClick={() => setTransposeLevel(0)} 
                  className="btn-ctrl active" 
                  style={{ flex: 1.5 }}
                  aria-label={`Tom atual transposto em ${transposeLevel} semitones`}
                >
                  {transposeLevel === 0 ? 'Original' : `${transposeLevel > 0 ? '+' : ''}${transposeLevel}`}
                </button>
                <button onClick={() => handleTranspose(1)} className="btn-ctrl" aria-label="Aumentar meio tom">♯</button>
              </div>
            </div>

            <div className="control-group">
              <label>Rolagem Auto</label>
              <button 
                onClick={() => setIsScrolling(!isScrolling)} 
                className={`btn-ctrl ${isScrolling ? 'active' : ''}`}
                aria-label={isScrolling ? 'Pausar rolagem automática' : 'Iniciar rolagem automática'}
              >
                {isScrolling ? '⏸️ Pausar (Espaço)' : '▶️ Rolar (Espaço)'}
              </button>
              {isScrolling && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Velocidade: {scrollSpeed}</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={scrollSpeed} 
                    onChange={(e) => setScrollSpeed(Number(e.target.value))} 
                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                  />
                </div>
              )}
            </div>

            <div className="control-group">
              <label>Leitura Limpa</label>
              <button 
                onClick={() => setHideChords(!hideChords)} 
                className={`btn-ctrl ${hideChords ? 'active' : ''}`}
                aria-label={hideChords ? 'Mostrar cifras' : 'Ocultar cifras para leitura pura'}
              >
                {hideChords ? '👀 Mostrar Cifras' : '🔇 Ocultar Cifras'}
              </button>
            </div>
          </aside>

          {/* Coluna da Cifra (Centro) */}
          <main 
            className="cifra-container" 
            style={{ fontSize: `${fontSize}px` }}
            aria-label="Letra e Cifra da Música"
          >
            {renderCifra()}
          </main>

          {/* Coluna de Diagramas de Teclado (Direita) */}
          <aside className="chords-sidebar" aria-label="Diagramas dos acordes">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              🎹 Acordes no Teclado
            </h2>
            {uniqueChords.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '12px' }}>Sem acordes para exibir.</p>
            ) : (
              <div className="chords-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
                {uniqueChords.map(chord => (
                  <div key={chord} style={{ background: 'var(--bg-card-hover)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '12px 6px' }}>
                    <ChordDiagram chord={chord} />
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
};
