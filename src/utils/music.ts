// @sos-edit: false

// Notas cromáticas naturais (sustenidos) e seus equivalentes bemóis
export const NOTES_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const NOTES_FLAT  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Mapeador de notas bemóis para índices cromáticos
const FLAT_MAP: { [key: string]: number } = {
  'Db': 1, 'Eb': 3, 'Gb': 6, 'Ab': 8, 'Bb': 10
};

// Retorna o índice cromático de qualquer nota
export function getNoteIndex(note: string): number {
  if (FLAT_MAP[note] !== undefined) {
    return FLAT_MAP[note];
  }
  return NOTES_SHARP.indexOf(note);
}

// Transpõe um acorde completo pelo número de semitones fornecido
export function transposeChord(chord: string, semitones: number): string {
  if (semitones === 0) return chord;

  // Regex para isolar o Tom Principal, Acidentais, a qualidade do Acorde (m7, sus4, etc.) e o Baixo
  // Exemplo: F#/Bb -> [F#]/[Bb], Cm7 -> [C][m7]
  const chordRegex = /^([A-G])(#|b)?([^/]*)(?:\/([A-G])(#|b)?)?$/;
  const match = chord.match(chordRegex);

  if (!match) return chord;

  const [_, rootNote, rootAccidental = '', quality, bassNote, bassAccidental = ''] = match;

  const fullRoot = rootNote + rootAccidental;
  const rootIndex = getNoteIndex(fullRoot);
  
  if (rootIndex === -1) return chord;

  // Calcula nova nota fundamental
  const newRootIndex = (rootIndex + semitones + 12) % 12;
  // Mantém a notação original (se usava bemol, usa bemol)
  const useFlat = rootAccidental === 'b' || (rootAccidental === '' && ['F'].includes(rootNote) && semitones < 0);
  let newRoot = useFlat ? NOTES_FLAT[newRootIndex] : NOTES_SHARP[newRootIndex];

  let newBass = '';
  if (bassNote) {
    const fullBass = bassNote + bassAccidental;
    const bassIndex = getNoteIndex(fullBass);
    if (bassIndex !== -1) {
      const newBassIndex = (bassIndex + semitones + 12) % 12;
      const useFlatBass = bassAccidental === 'b';
      newBass = '/' + (useFlatBass ? NOTES_FLAT[newBassIndex] : NOTES_SHARP[newBassIndex]);
    }
  }

  return newRoot + quality + newBass;
}

// Dicionário de formas de acordes de piano (posições relativas de teclas a partir da tônica)
// Representado em semitones
export const CHORD_SHAPES: { [key: string]: number[] } = {
  '': [0, 4, 7],         // Maior
  'm': [0, 3, 7],        // Menor
  '7': [0, 4, 7, 10],    // Sétima dominante
  'm7': [0, 3, 7, 10],   // Sétima menor
  'maj7': [0, 4, 7, 11], // Sétima maior
  'M7': [0, 4, 7, 11],
  'sus4': [0, 5, 7],     // Quarta suspensa
  'sus2': [0, 2, 7],     // Segunda suspensa
  'dim': [0, 3, 6],      // Diminuto
  '9': [0, 4, 7, 10, 14], // Nona
  'm9': [0, 3, 7, 10, 14],
  '6': [0, 4, 7, 9],     // Sexta
  'm6': [0, 3, 7, 9],
  'add9': [0, 4, 7, 14],
  '5': [0, 7]            // Power chord
};

// Retorna os semitones absolutos de um acorde para destacar no teclado (duas oitavas, de C a B)
export function getChordKeys(chord: string): number[] {
  // Regex para identificar a tônica e a qualidade
  const chordRegex = /^([A-G])(#|b)?([^/]*)/;
  const match = chord.match(chordRegex);
  if (!match) return [];

  const [_, rootNote, rootAccidental = '', quality] = match;
  const rootIndex = getNoteIndex(rootNote + rootAccidental);

  if (rootIndex === -1) return [];

  // Encontra os intervalos do acorde baseado na qualidade (padrão é maior)
  let intervals = CHORD_SHAPES[''];
  
  // Limpa caracteres adicionais para dar match na qualidade
  const cleanQuality = quality.trim();
  if (CHORD_SHAPES[cleanQuality] !== undefined) {
    intervals = CHORD_SHAPES[cleanQuality];
  } else if (cleanQuality.startsWith('m')) {
    intervals = CHORD_SHAPES['m']; // Fallback para menor
  }

  // Gera as teclas reais (mapeadas para índices cromáticos 0-23 no teclado de duas oitavas)
  const keys = intervals.map(interval => {
    return (rootIndex + interval) % 24;
  });

  // Também destaca a nota de baixo (bass) se houver barra "/"
  const bassMatch = chord.match(/\/([A-G])(#|b)?$/);
  if (bassMatch) {
    const bassIndex = getNoteIndex(bassMatch[1] + (bassMatch[2] || ''));
    if (bassIndex !== -1) {
      // Adiciona o baixo na oitava inferior do teclado
      if (!keys.includes(bassIndex)) {
        keys.push(bassIndex);
      }
    }
  }

  return keys;
}

// Marcadores de seção comuns que podem aparecer em linhas de cifra
const SECTION_MARKERS = /^(?:\[?[Ií]ntro\]?|\[?[S]olo\]?|\[?[R]iff\]?|\[?[R]efr[aã]o\]?|\[?[P]onte\]?|\[?[V]erso\]?|\[?[C]horus\]?|\[?[B]ridge\]?|\[?[O]utro\]?|\[?[A]cústico\]?|\[?[P]ré-refr[aã]o\]?):?$/i;

// Símbolos de tablatura ou compasso comuns
const SYMBOLS = /^[||\-~\s+xX*]+$/;

/**
 * Verifica se um token (palavra) é uma representação válida de um acorde.
 */
export function isChord(token: string): boolean {
  // Regex flexível de acordes que valida fundamentais (A-G), acidentais (#/b),
  // qualidades/sufixos comuns, extensões em parênteses e baixos invertidos (ex: F#/Bb)
  const chordRegex = /^[A-G](?:#|b)?(?:m|min|maj|M|maj7|maj9|maj13|min7|m7|m9|m11|m13|sus2|sus4|sus|dim|dim7|aug|add9|add11|add2|add4|5|6|7|9|11|13|M7|m7b5|6\/9|7#9|7b9|7#5|7b5)*(?:\([^)]+\))?(?:\/[A-G](?:#|b)?)?$/i;
  
  return chordRegex.test(token);
}

/**
 * Verifica se uma linha é composta majoritariamente por acordes, espaços e marcadores de seção.
 */
export function isChordLine(line: string): boolean {
  const trimmed = line.trim();
  if (trimmed === '') return false;

  const tokens = trimmed.split(/\s+/);
  let validCount = 0;

  for (const token of tokens) {
    if (isChord(token) || SECTION_MARKERS.test(token) || SYMBOLS.test(token)) {
      validCount++;
    }
  }

  // Consideramos linha de cifra se pelo menos 85% dos tokens não-vazios forem válidos
  return validCount / tokens.length >= 0.85;
}

