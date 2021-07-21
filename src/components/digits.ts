import * as Path from './digit-path';

export class Digits {
  private _minute!: number;
  private _second!: number;
  private _fullPath: string[];
  private _path!: string;

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
    console.log('start invoked');
    setInterval(() => {
      this.second = this._second - 1;
      console.log(this._second);
    }, 1000);
  }

  get path(): string {
    return this._path;
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
