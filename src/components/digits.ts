import * as Path from './digit-path';

export class Digits {
  private _centiSecond = 99;
  private _minute!: number;
  private _second!: number;
  private _fullPath: string[];
  private _path!: string;
  private _timerId: number | undefined;
  isUp = false;

  constructor(option: NumberOptions, minute = 25, second = 0) {
    switch (option) {
      case NumberOptions.LEFT: {
        this._fullPath = [...Path.LEFT_FULL_PATH];
        break;
      }
      case NumberOptions.MIDDLE: {
        this._fullPath = [...Path.MIDDLE_FULL_PATH];
        break;
      }
      case NumberOptions.RIGHT: {
        this._fullPath = [...Path.RIGHT_FULL_PATH];
        break;
      }
    }
    this._minute = minute;
    this._second = second;
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

export enum NumberOptions {
  LEFT,
  MIDDLE,
  RIGHT,
}
