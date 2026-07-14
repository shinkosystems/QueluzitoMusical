// @sos-edit: false
import React, { useState } from 'react';
import { Song, SongBlock } from '../data/songs';
import { isAuthenticated, setAuthenticated } from '../auth/credentials';
import { LoginModal } from './LoginModal';

interface SongListProps {
  songBlocks: SongBlock[];
  onSelectSong: (song: Song) => void;
  onUpdateSongBlocks: (newBlocks: SongBlock[]) => void;
  onResetSongBlocks: () => void;
}

export const SongList: React.FC<SongListProps> = ({
  songBlocks,
  onSelectSong,
  onUpdateSongBlocks,
  onResetSongBlocks,
}) => {
  const [isOrganizeMode, setIsOrganizeMode] = useState(false);
  const [draggedSong, setDraggedSong] = useState<{ id: string; blockId: string } | null>(null);
  const [draggingSongId, setDraggingSongId] = useState<string | null>(null);
  const [dragOverBlockId, setDragOverBlockId] = useState<string | null>(null);
  const [dragOverSongId, setDragOverSongId] = useState<string | null>(null);
  
  // Estado para suporte a cliques/toques (Click-to-Move) no mobile
  const [selectedSong, setSelectedSong] = useState<{ id: string; blockId: string } | null>(null);

  // Estado para o modal de Login
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleDragStart = (e: React.DragEvent, songId: string, sourceBlockId: string) => {
    e.dataTransfer.setData('text/plain', songId);
    e.dataTransfer.effectAllowed = 'move';
    setDraggedSong({ id: songId, blockId: sourceBlockId });
    setDraggingSongId(songId);
  };

  const handleDragEnd = () => {
    setDraggedSong(null);
    setDraggingSongId(null);
    setDragOverBlockId(null);
    setDragOverSongId(null);
  };

  const handleDragOverBlock = (e: React.DragEvent, blockId: string) => {
    e.preventDefault();
    if (dragOverBlockId !== blockId) {
      setDragOverBlockId(blockId);
    }
  };

  const handleDragOverSong = (e: React.DragEvent, songId: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragOverSongId !== songId) {
      setDragOverSongId(songId);
    }
  };

  const handleDrop = (e: React.DragEvent, targetBlockId: string, targetSongId: string | null = null) => {
    e.preventDefault();
    setDragOverBlockId(null);
    setDragOverSongId(null);

    if (!draggedSong) return;
    const { id: songId, blockId: sourceBlockId } = draggedSong;

    // Se for a mesma música sobre ela mesma, não faz nada
    if (songId === targetSongId) return;

    // Encontra a música nos blocos atuais
    const sourceBlock = songBlocks.find(b => b.id === sourceBlockId);
    const songToMove = sourceBlock?.songs.find(s => s.id === songId);

    if (!songToMove) return;

    // 1. Remove a música do bloco de origem
    let updatedBlocks = songBlocks.map(b => {
      if (b.id === sourceBlockId) {
        return {
          ...b,
          songs: b.songs.filter(s => s.id !== songId)
        };
      }
      return b;
    });

    // 2. Insere a música no bloco de destino
    updatedBlocks = updatedBlocks.map(b => {
      if (b.id === targetBlockId) {
        const songsCopy = [...b.songs];
        if (targetSongId) {
          const idx = songsCopy.findIndex(s => s.id === targetSongId);
          songsCopy.splice(idx, 0, songToMove);
        } else {
          songsCopy.push(songToMove);
        }
        return {
          ...b,
          songs: songsCopy
        };
      }
      return b;
    });

    onUpdateSongBlocks(updatedBlocks);
    setDraggedSong(null);
  };

  // Lógica do Click-to-Move (Mobile & Acessibilidade)
  const handleSongClick = (songId: string, blockId: string) => {
    if (!isOrganizeMode) return;
    if (selectedSong && selectedSong.id === songId) {
      setSelectedSong(null);
    } else {
      setSelectedSong({ id: songId, blockId });
    }
  };

  const handleMoveSelectedToBlock = (targetBlockId: string) => {
    if (!selectedSong) return;
    const { id: songId, blockId: sourceBlockId } = selectedSong;

    if (sourceBlockId === targetBlockId) return;

    const sourceBlock = songBlocks.find(b => b.id === sourceBlockId);
    const songToMove = sourceBlock?.songs.find(s => s.id === songId);

    if (!songToMove) return;

    // 1. Remove do bloco de origem
    let updatedBlocks = songBlocks.map(b => {
      if (b.id === sourceBlockId) {
        return {
          ...b,
          songs: b.songs.filter(s => s.id !== songId)
        };
      }
      return b;
    });

    // 2. Insere ao final do bloco de destino
    updatedBlocks = updatedBlocks.map(b => {
      if (b.id === targetBlockId) {
        return {
          ...b,
          songs: [...b.songs, songToMove]
        };
      }
      return b;
    });

    onUpdateSongBlocks(updatedBlocks);
    setSelectedSong(null);
  };

  const handleToggleOrganizeMode = () => {
    if (isOrganizeMode) {
      setIsOrganizeMode(false);
      setSelectedSong(null);
      setDraggedSong(null);
    } else {
      if (isAuthenticated()) {
        setIsOrganizeMode(true);
      } else {
        setIsLoginModalOpen(true);
      }
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsOrganizeMode(false);
    setSelectedSong(null);
    setDraggedSong(null);
  };

  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '40px 0 30px', borderBottom: '1px solid var(--border-color)', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, background: 'linear-gradient(135deg, #8C661F 0%, #F2BF5E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>
          Queluzito Musical
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Aplicativo acessível para estudo de blocos musicais e cifras de Tim e Vanessa. Escolha uma música abaixo para ver a letra, acordes e diagramas de teclado.
        </p>
      </section>

      {/* Barra de Controle de Organização */}
      <div className="organize-bar">
        <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          {isOrganizeMode ? (
            selectedSong ? (
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
                👉 Música selecionada! Clique no botão "[ Mover para cá ]" do bloco de destino.
              </span>
            ) : (
              '🛠️ Arraste as músicas ou clique em uma delas para selecioná-la e movê-la.'
            )
          ) : (
            '📂 Organize e distribua suas músicas em blocos personalizados.'
          )}
        </span>
        <div style={{ display: 'flex', gap: '10px' }}>
          {isAuthenticated() && (
            <button
              onClick={handleLogout}
              className="btn-ctrl"
              style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', color: '#D32F2F', borderColor: '#FFCDD2' }}
              aria-label="Sair do modo administrador"
            >
              Sair 🚪
            </button>
          )}
          <button 
            onClick={handleToggleOrganizeMode}
            className={`btn-toggle-organize ${isOrganizeMode ? 'active' : ''}`}
            aria-label="Alternar modo de organização dos blocos"
          >
            {isOrganizeMode ? '✓ Concluir Organização' : '⚙️ Organizar Blocos'}
          </button>
          <button 
            onClick={onResetSongBlocks}
            className="btn-ctrl"
            style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem' }}
            aria-label="Restaurar distribuição padrão de músicas nos blocos"
          >
            Restaurar Padrão
          </button>
        </div>
      </div>

      {/* Grid de Blocos */}
      <main aria-label="Lista de Blocos e Músicas">
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '24px' }}>📁 Blocos Musicais</h2>
        
        <div className="block-grid">
          {songBlocks.map(block => {
            const isDragOver = dragOverBlockId === block.id;
            const canShowMoveHere = selectedSong && selectedSong.blockId !== block.id;
            
            return (
              <section 
                key={block.id} 
                className={`block-card ${isDragOver ? 'drag-over' : ''}`} 
                aria-labelledby={`title-${block.id}`}
                onDragOver={(e) => isOrganizeMode && handleDragOverBlock(e, block.id)}
                onDragLeave={isOrganizeMode ? () => setDragOverBlockId(null) : undefined}
                onDrop={(e) => isOrganizeMode && handleDrop(e, block.id, null)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 id={`title-${block.id}`} style={{ margin: 0 }}>{block.name}</h3>
                  {isOrganizeMode && canShowMoveHere && (
                    <button
                      onClick={() => handleMoveSelectedToBlock(block.id)}
                      className="btn-ctrl active"
                      style={{ 
                        padding: '4px 8px', 
                        fontSize: '0.75rem', 
                        borderRadius: '6px', 
                        background: 'var(--primary)',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                       colocar aqui 📥
                    </button>
                  )}
                </div>
                
                <ul className="block-songs-list" style={{ minHeight: isOrganizeMode ? '100px' : 'auto' }}>
                  {block.songs.length === 0 && isOrganizeMode && (
                    <li style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', padding: '20px 0', border: '1px dashed var(--border-color)', borderRadius: '8px' }}>
                      Arraste músicas aqui
                    </li>
                  )}
                  {block.songs.map(song => {
                    const isDragging = draggingSongId === song.id;
                    const isDragOverSong = dragOverSongId === song.id;
                    const isSelected = selectedSong?.id === song.id;

                    return (
                      <li 
                        key={song.id}
                        draggable={isOrganizeMode}
                        onDragStart={(e) => handleDragStart(e, song.id, block.id)}
                        onDragEnd={handleDragEnd}
                        onDragOver={(e) => isOrganizeMode && handleDragOverSong(e, song.id)}
                        onDragLeave={isOrganizeMode ? () => setDragOverSongId(null) : undefined}
                        onDrop={(e) => isOrganizeMode && handleDrop(e, block.id, song.id)}
                        onClick={() => isOrganizeMode && handleSongClick(song.id, block.id)}
                        className={isOrganizeMode ? `song-drag-item ${isDragging ? 'dragging' : ''} ${isDragOverSong ? 'drag-over-song' : ''} ${isSelected ? 'selected' : ''}` : ''}
                      >
                        {isOrganizeMode ? (
                          <>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                              <span className="drag-handle">☰</span>
                              <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                                {song.title}
                              </span>
                            </span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {song.artist}
                            </span>
                          </>
                        ) : (
                          <button
                            onClick={() => onSelectSong(song)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--text-primary)',
                              textAlign: 'left',
                              width: '100%',
                              cursor: 'pointer',
                              padding: '6px 8px',
                              borderRadius: '6px',
                              fontSize: '1rem',
                              fontWeight: 500,
                              transition: 'background var(--transition-fast), color var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'var(--primary-light)';
                              e.currentTarget.style.color = 'var(--primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'none';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                            aria-label={`Ver cifra de ${song.title} por ${song.artist}`}
                          >
                            🎵 {song.title}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSuccess={() => setIsOrganizeMode(true)}
      />
    </div>
  );
};
