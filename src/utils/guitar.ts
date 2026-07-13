// @sos-edit: false
// Posições das 6 cordas: [E6, A5, D4, G3, B2, e1]
// Valores: -1 = X (não toca), 0 = O (corda solta), 1-12 = número do traste
export interface GuitarChordPosition {
  frets: [number, number, number, number, number, number];
  baseFret?: number; // Se o acorde começar em trastes superiores (ex: pestana na 3ª casa)
}

// Enarmônicos para simplificação de busca
const ENHARMONICS: { [key: string]: string } = {
  'C#': 'Db', 'Db': 'C#',
  'D#': 'Eb', 'Eb': 'D#',
  'F#': 'Gb', 'Gb': 'F#',
  'G#': 'Ab', 'Ab': 'G#',
  'A#': 'Bb', 'Bb': 'A#',
};

// Dicionário com mais de 70 acordes comuns no violão
export const GUITAR_CHORDS_DB: { [key: string]: GuitarChordPosition } = {
  // Maiores Naturais e Sustenidos/Bemóis
  'C': { frets: [-1, 3, 2, 0, 1, 0] },
  'C#': { frets: [-1, 4, 6, 6, 6, 4], baseFret: 4 },
  'Db': { frets: [-1, 4, 6, 6, 6, 4], baseFret: 4 },
  'D': { frets: [-1, -1, 0, 2, 3, 2] },
  'D#': { frets: [-1, -1, 1, 3, 4, 3], baseFret: 1 },
  'Eb': { frets: [-1, 6, 8, 8, 8, 6], baseFret: 6 },
  'E': { frets: [0, 2, 2, 1, 0, 0] },
  'F': { frets: [1, 3, 3, 2, 1, 1] },
  'F#': { frets: [2, 4, 4, 3, 2, 2], baseFret: 2 },
  'Gb': { frets: [2, 4, 4, 3, 2, 2], baseFret: 2 },
  'G': { frets: [3, 2, 0, 0, 0, 3] },
  'G#': { frets: [4, 6, 6, 5, 4, 4], baseFret: 4 },
  'Ab': { frets: [4, 6, 6, 5, 4, 4], baseFret: 4 },
  'A': { frets: [-1, 0, 2, 2, 2, 0] },
  'A#': { frets: [-1, 1, 3, 3, 3, 1] },
  'Bb': { frets: [-1, 1, 3, 3, 3, 1] },
  'B': { frets: [-1, 2, 4, 4, 4, 2] },

  // Menores
  'Cm': { frets: [-1, 3, 5, 5, 4, 3], baseFret: 3 },
  'C#m': { frets: [-1, 4, 6, 6, 5, 4], baseFret: 4 },
  'Dbm': { frets: [-1, 4, 6, 6, 5, 4], baseFret: 4 },
  'Dm': { frets: [-1, -1, 0, 2, 3, 1] },
  'D#m': { frets: [-1, -1, 4, 3, 4, 2], baseFret: 1 },
  'Ebm': { frets: [-1, 6, 8, 8, 7, 6], baseFret: 6 },
  'Em': { frets: [0, 2, 2, 0, 0, 0] },
  'Fm': { frets: [1, 3, 3, 1, 1, 1] },
  'F#m': { frets: [2, 4, 4, 2, 2, 2], baseFret: 2 },
  'Gbm': { frets: [2, 4, 4, 2, 2, 2], baseFret: 2 },
  'Gm': { frets: [3, 5, 5, 3, 3, 3], baseFret: 3 },
  'G#m': { frets: [4, 6, 6, 4, 4, 4], baseFret: 4 },
  'Abm': { frets: [4, 6, 6, 4, 4, 4], baseFret: 4 },
  'Am': { frets: [-1, 0, 2, 2, 1, 0] },
  'A#m': { frets: [-1, 1, 3, 3, 2, 1] },
  'Bbm': { frets: [-1, 1, 3, 3, 2, 1] },
  'Bm': { frets: [-1, 2, 4, 4, 3, 2] },

  // Sétimas (7)
  'C7': { frets: [-1, 3, 2, 3, 1, 0] },
  'C#7': { frets: [-1, 4, 6, 4, 6, 4], baseFret: 4 },
  'D7': { frets: [-1, -1, 0, 2, 1, 2] },
  'E7': { frets: [0, 2, 0, 1, 0, 0] },
  'F7': { frets: [1, 3, 1, 2, 1, 1] },
  'F#7': { frets: [2, 4, 2, 3, 2, 2], baseFret: 2 },
  'G7': { frets: [3, 2, 0, 0, 0, 1] },
  'A7': { frets: [-1, 0, 2, 0, 2, 0] },
  'B7': { frets: [-1, 2, 1, 2, 0, 2] },

  // Menores com Sétima (m7)
  'Cm7': { frets: [-1, 3, 5, 3, 4, 3], baseFret: 3 },
  'C#m7': { frets: [-1, 4, 6, 4, 5, 4], baseFret: 4 },
  'Dm7': { frets: [-1, -1, 0, 2, 1, 1] },
  'Em7': { frets: [0, 2, 2, 0, 3, 0] },
  'Fm7': { frets: [1, 3, 1, 1, 1, 1] },
  'F#m7': { frets: [2, 4, 2, 2, 2, 2], baseFret: 2 },
  'Gm7': { frets: [3, 5, 3, 3, 3, 3], baseFret: 3 },
  'Am7': { frets: [-1, 0, 2, 0, 1, 0] },
  'Bm7': { frets: [-1, 2, 4, 2, 3, 2] },

  // Nona (9) e Variantes Comuns
  'C9': { frets: [-1, 3, 2, 0, 3, 0] },
  'D9': { frets: [-1, -1, 0, 2, 3, 0] },
  'E9': { frets: [0, 2, 2, 1, 0, 2] },
  'G9': { frets: [3, -1, 0, 2, 3, 5], baseFret: 2 },
  'A9': { frets: [-1, 0, 2, 4, 2, 0] },
  'B9': { frets: [-1, 2, 1, 2, 2, 2] },
  'C#9': { frets: [-1, 4, 3, 4, 4, 4], baseFret: 3 },
  'Eb9': { frets: [-1, 6, 5, 6, 6, 6], baseFret: 5 },
  'F9': { frets: [1, 3, 1, 2, 1, 3] },
};

/**
 * Busca de Acordes de Violão com Fallbacks Inteligentes.
 * 1. Busca direta (Ex: Bm7).
 * 2. Enarmônico (Ex: F#m7 -> Gbm7).
 * 3. Inversões (Ex: F#/Bb -> F#).
 * 4. Simplificação de Tensão (Ex: Bm9 -> Bm7 -> Bm).
 */
export function getGuitarChord(chord: string): GuitarChordPosition | null {
  let query = chord.trim();
  if (GUITAR_CHORDS_DB[query]) return GUITAR_CHORDS_DB[query];

  // Caso 1: Se for baixo invertido (com barra '/'), remove o baixo para achar a forma fundamental
  if (query.includes('/')) {
    query = query.split('/')[0];
    if (GUITAR_CHORDS_DB[query]) return GUITAR_CHORDS_DB[query];
  }

  // Caso 2: Substituição Enarmônica
  const rootMatch = query.match(/^([A-G])(#|b)?(.*)$/);
  if (rootMatch) {
    const [_, note, accidental = '', suffix] = rootMatch;
    const baseNote = note + accidental;
    if (ENHARMONICS[baseNote]) {
      const enahrmonicQuery = ENHARMONICS[baseNote] + suffix;
      if (GUITAR_CHORDS_DB[enahrmonicQuery]) return GUITAR_CHORDS_DB[enahrmonicQuery];
    }
  }

  // Caso 3: Simplificação de Tensão (Ex: maj7 -> original; m9 -> m7 -> m; 9 -> 7 -> original)
  let simplified = query;
  if (simplified.endsWith('9')) {
    simplified = simplified.replace('9', '7');
    if (GUITAR_CHORDS_DB[simplified]) return GUITAR_CHORDS_DB[simplified];
    simplified = simplified.replace('7', '');
    if (GUITAR_CHORDS_DB[simplified]) return GUITAR_CHORDS_DB[simplified];
  }
  if (simplified.endsWith('maj7') || simplified.endsWith('M7')) {
    simplified = simplified.replace('maj7', '').replace('M7', '');
    if (GUITAR_CHORDS_DB[simplified]) return GUITAR_CHORDS_DB[simplified];
  }
  if (simplified.endsWith('m7b5')) {
    simplified = simplified.replace('m7b5', 'dim');
    if (GUITAR_CHORDS_DB[simplified]) return GUITAR_CHORDS_DB[simplified];
  }

  // Fallback final: extrai só Fundamental e Qualidade básica (M/m/7/m7)
  if (rootMatch) {
    const [_, note, accidental = '', suffix] = rootMatch;
    const cleanSuffix = suffix.toLowerCase();
    let basicSuffix = '';
    if (cleanSuffix.includes('m') && cleanSuffix.includes('7')) basicSuffix = 'm7';
    else if (cleanSuffix.includes('m')) basicSuffix = 'm';
    else if (cleanSuffix.includes('7')) basicSuffix = '7';

    const basicQuery = note + accidental + basicSuffix;
    if (GUITAR_CHORDS_DB[basicQuery]) return GUITAR_CHORDS_DB[basicQuery];
  }

  return null;
}
