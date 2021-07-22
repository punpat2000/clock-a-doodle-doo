import type { Theme } from './models';

export const lavender: Theme = {
  minor: '#B87FEC',
  major: '#D5B6F1',
  base: 'white',
  background: '#F8F8FA',
};

export const mint: Theme = {
  minor: '#4EE37C',
  major: '#A0E8B6',
  base: 'white',
  background: '#F8F8FA',
};

export const orange: Theme = {
  minor: '#F3864C',
  major: '#F5C2A7',
  base: 'white',
  background: '#F8F8FA',
};

export const hydrangea: Theme = {
  minor: '#43BAE8',
  major: '#B3DAE9',
  base: 'white',
  background: '#F8F8FA',
};

export const banana: Theme = {
  minor: '#F3CA27',
  major: '#F9DF78',
  base: 'white',
  background: '#F8F8FA',
};

export const peach: Theme = {
  minor: '#EF7375',
  major: '#FFB5B6',
  base: 'white',
  background: '#F8F8FA',
};

export const galaxy: Theme = {
  minor: '#9A0DA8',
  major: '#E92EFB',
  base: 'white',
  background: '#04005E',
};

export const alien: Theme = {
  minor: '#5EBF03',
  major: '#7CFF01',
  base: 'white',
  background: '#181F2A',
};

export const betelgeuse: Theme = {
  minor: '#C70000',
  major: '#FE0000',
  base: 'white',
  background: '#181F2A',
};

export const venus: Theme = {
  minor: '#05CAC1',
  major: '#01FFF4',
  base: 'white',
  background: '#181F2A',
};

export const luna: Theme = {
  minor: '#EFC51E',
  major: '#FFF205',
  base: 'white',
  background: '#181F2A',
};

export const nebula: Theme = {
  minor: '#CC1463',
  major: '#FF1178',
  base: 'white',
  background: '#181F2A',
};

const randomColor = (): string => {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
};

export const random: Theme = {
  minor: randomColor(),
  major: randomColor(),
  base: randomColor(),
  background: randomColor(),
};

export class pickTheme {
  private static themeList = [
    lavender,
    mint,
    orange,
    hydrangea,
    banana,
    peach,
    galaxy,
    alien,
    betelgeuse,
    venus,
    luna,
    nebula,
    random,
  ];
  private static current = 1;

  static pick(): Theme {
    const pickedTheme = this.themeList[this.current];
    this.next();
    document.documentElement.style.setProperty(
      '--background-color',
      pickedTheme.background
    );
    return pickedTheme;
  }

  private static next(): void {
    if (this.current === this.themeList.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }
  }
}
