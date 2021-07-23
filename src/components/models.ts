import type { Timer } from './timer';

export type Theme = {
  major: string;
  minor: string;
  base: string;
  background: string;
};

export interface ClockModel {
  theme: Theme;
  forcePause: () => void;
  current: number;
  isRunning: boolean;
  queue: Timer[];
  settingsClicked: boolean;
  mainBtn: string;
}
