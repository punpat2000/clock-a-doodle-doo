import type { Theme } from './models';

export const lavender: Theme = {
  minor: '#B87FEC',
  major: '#D5B6F1',
  base: 'white',
  background: '#F8F8FA',
};

export const galaxy: Theme = {
  minor: '#E92EFB',
  major: '#E92EFB',
  base: 'white',
  background: '#04005E',
};

export const mint: Theme = {
  minor: '#4EE37C',
  major: '#A0E8B6',
  base: 'white',
  background: '#F8F8FA',
};

export class pickTheme {
  private static themeList = [lavender, galaxy, mint];
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
