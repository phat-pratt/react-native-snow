export interface SnowflakeConfig {
  glyph: string;
  size: number;
  offset: `${number}%`;
  fallDelay: number;
  shakeDelay: number;
}

export const lightSnowflakes = [
  { glyph: '❆', size: 14, offset: '1%', fallDelay: 0, shakeDelay: 0 },
  { glyph: '❅', size: 24, offset: '5%', fallDelay: 1000, shakeDelay: 1000 },
  { glyph: '❆', size: 14, offset: '10%', fallDelay: 6000, shakeDelay: 500 },
  { glyph: '❅', size: 18, offset: '15%', fallDelay: 4000, shakeDelay: 2000 },
  { glyph: '❆', size: 14, offset: '20%', fallDelay: 2000, shakeDelay: 2000 },
  { glyph: '❆', size: 24, offset: '25%', fallDelay: 8000, shakeDelay: 3000 },
  { glyph: '❆', size: 14, offset: '30%', fallDelay: 6000, shakeDelay: 2000 },
  { glyph: '❅', size: 18, offset: '35%', fallDelay: 2500, shakeDelay: 1000 },
  { glyph: '❆', size: 14, offset: '40%', fallDelay: 3000, shakeDelay: 1500 },
] as SnowflakeConfig[];

export const mediumSnowflakes = [
  { glyph: '❆', size: 14, offset: '01%', fallDelay: 500, shakeDelay: 0 },
  { glyph: '❆', size: 18, offset: '04%', fallDelay: 3900, shakeDelay: 1000 },
  { glyph: '❆', size: 14, offset: '05%', fallDelay: 7500, shakeDelay: 1000 },
  { glyph: '❆', size: 24, offset: '07%', fallDelay: 8100, shakeDelay: 500 },
  { glyph: '❆', size: 14, offset: '10%', fallDelay: 3000, shakeDelay: 2000 },
  { glyph: '❆', size: 24, offset: '12%', fallDelay: 2200, shakeDelay: 1400 },
  { glyph: '❆', size: 14, offset: '15%', fallDelay: 6700, shakeDelay: 3000 },
  { glyph: '❆', size: 24, offset: '17%', fallDelay: 1300, shakeDelay: 2000 },
  { glyph: '❆', size: 18, offset: '18%', fallDelay: 8800, shakeDelay: 0 },
  { glyph: '❆', size: 18, offset: '19%', fallDelay: 0, shakeDelay: 500 },
  { glyph: '❆', size: 14, offset: '19%', fallDelay: 7100, shakeDelay: 2000 },
  { glyph: '❆', size: 24, offset: '20%', fallDelay: 5900, shakeDelay: 500 },
  { glyph: '❆', size: 18, offset: '22%', fallDelay: 3400, shakeDelay: 1700 },
  { glyph: '❆', size: 14, offset: '24%', fallDelay: 1900, shakeDelay: 4000 },
  { glyph: '❆', size: 18, offset: '27%', fallDelay: 3400, shakeDelay: 900 },
  { glyph: '❆', size: 14, offset: '28%', fallDelay: 750, shakeDelay: 2500 },
  { glyph: '❆', size: 18, offset: '30%', fallDelay: 4700, shakeDelay: 3000 },
] as SnowflakeConfig[];
