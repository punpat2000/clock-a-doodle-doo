import * as Path from './digit-path';
import { ClockModel } from './models';

export class Timer {
  private _centiSecond = 0;
  private _initialMinute: number;
  private _initialSecond: number;
  private _minute: number;
  private _second: number;
  private _fullPath: string[];
  private _path!: string;
  private _timerId: number | undefined;
  isUp = false;

  constructor(
    private forcePause: ClockModel['forcePause'],
    option: TimerOptions,
    minute = 25,
    second = 0
  ) {
    switch (option) {
      case TimerOptions.LEFT: {
        this._fullPath = [...Path.LEFT_FULL_PATH];
        break;
      }
      case TimerOptions.MIDDLE: {
        this._fullPath = [...Path.MIDDLE_FULL_PATH];
        break;
      }
      case TimerOptions.RIGHT: {
        this._fullPath = [...Path.RIGHT_FULL_PATH];
        break;
      }
    }
    this._minute = this._initialMinute = minute;
    this._second = this._initialSecond = second;
    this.updatePath();
  }

  static createTripleTimer(clock: ClockModel): [Timer, Timer, Timer] {
    return [
      new Timer(clock.forcePause.bind(clock), TimerOptions.LEFT),
      new Timer(clock.forcePause.bind(clock), TimerOptions.MIDDLE),
      new Timer(clock.forcePause.bind(clock), TimerOptions.RIGHT),
    ];
  }

  static createDoubleTimer(clock: ClockModel): [Timer, Timer] {
    return [
      new Timer(clock.forcePause.bind(clock), TimerOptions.LEFT),
      new Timer(clock.forcePause.bind(clock), TimerOptions.RIGHT),
    ];
  }

  reset(): void {
    this.isUp = false;
    this._centiSecond = 0;
    this._minute = this._initialMinute;
    this._second = this._initialSecond;
    this.updatePath();
  }

  start(): void {
    if (!this._timerId) {
      this._timerId = setInterval(this.decrement.bind(this), 10);
    }
  }

  pause(): void {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = undefined;
    }
  }

  get path(): string {
    return this._path;
  }

  decrement(): void {
    if (this._centiSecond !== 0) {
      this._centiSecond--;
      return;
    }
    if (this._second !== 0) {
      this._second--;
      this._centiSecond = 99;
    } else if (this._minute !== 0) {
      this._minute--;
      this._second = 59;
      this._centiSecond = 99;
    } else {
      this.pause();
      this.isUp = true;
      this.forcePause();
      return;
    }
    this.updatePath();
  }

  set minute(num: number) {
    this._minute = num;
    this.updatePath();
  }

  set second(num: number) {
    this._second = num;
    this.updatePath();
  }

  private updatePath() {
    const firstDigit = (this._minute / 10) | 0;
    const secondDigit = this._minute % 10;
    const thirdDigit = (this._second / 10) | 0;
    const fourthDigit = this._second % 10;
    this._path = this._fullPath
      .filter((_, index) => {
        if (index === Path.PERIOD_INDEX) {
          return true;
        }
        if (index < Path.SECOND_DIGIT_INDEX) {
          return !Path.DIGIT_ELEMENT[firstDigit].includes(index);
        }
        if (index < Path.THIRD_DIGIT_INDEX) {
          return !Path.DIGIT_ELEMENT[secondDigit].includes(
            index - Path.SECOND_DIGIT_INDEX
          );
        }
        if (index < Path.FOURTH_DIGIT_INDEX) {
          return !Path.DIGIT_ELEMENT[thirdDigit].includes(
            index - Path.THIRD_DIGIT_INDEX
          );
        }
        return !Path.DIGIT_ELEMENT[fourthDigit].includes(
          index - Path.FOURTH_DIGIT_INDEX
        );
      })
      .join('');
  }
}

export enum TimerOptions {
  LEFT,
  MIDDLE,
  RIGHT,
}
