import { WORDS } from "./wordlist";

const GRID_SIZE = 0.000027;
const LAT_MIN = 6.5;
const LNG_MIN = 68.1;
const GRID_MULTIPLIER = 100000;

export function encodeLatLngToWords(lat: number, lng: number): string[] {
  const x = Math.floor((lng - LNG_MIN) / GRID_SIZE);
  const y = Math.floor((lat - LAT_MIN) / GRID_SIZE);
  const index = y * GRID_MULTIPLIER + x;

  const word1 = WORDS[index % WORDS.length];
  const word2 = WORDS[Math.floor(index / WORDS.length) % WORDS.length];
  const word3 = WORDS[Math.floor(index / (WORDS.length ** 2)) % WORDS.length];

  return [word1, word2, word3];
}

export function decodeWordsToLatLng(
  w1: string,
  w2: string,
  w3: string
): { lat: number; lng: number } | null {
  const i1 = WORDS.indexOf(w1);
  const i2 = WORDS.indexOf(w2);
  const i3 = WORDS.indexOf(w3);

  if (i1 === -1 || i2 === -1 || i3 === -1) {
    return null;
  }

  const index = i1 + i2 * WORDS.length + i3 * (WORDS.length ** 2);
  const y = Math.floor(index / GRID_MULTIPLIER);
  const x = index % GRID_MULTIPLIER;

  const result = {
    lat: LAT_MIN + y * GRID_SIZE,
    lng: LNG_MIN + x * GRID_SIZE,
  };

  return result;
}
