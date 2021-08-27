import * as workerTimers from 'worker-timers';

export class AccurateInterval {
  private expected!: number;
  private timeout?: number;
  private dt!: number;
  isRunning = false;
  constructor(private func: () => void, private interval: number) {}

  start(): void {
    if (this.isRunning) {
      throw new Error();
    }
    this.isRunning = true;
    this.expected = Date.now() + this.interval;
    this.timeout = workerTimers.setTimeout(this.step.bind(this), this.interval);
  }

  stop(): void {
    if (this.timeout) {
      workerTimers.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.isRunning = false;
  }

  resume(): void {
    // for debugging
    if (!this.isRunning) {
      throw new Error();
    }
    this.expected = Date.now() + this.interval;
    this.timeout = workerTimers.setTimeout(
      this.step.bind(this),
      Math.max(0, this.interval - this.dt)
    );
  }

  pause(): void {
    // record elapsed time
    this.dt = this.expected - Date.now();
    this.stop();
  }

  private step(): void {
    if (!this.isRunning) {
      return;
    }
    const drift = Date.now() - this.expected;
    this.func();
    this.expected += this.interval;
    this.timeout = workerTimers.setTimeout(
      this.step.bind(this),
      Math.max(0, this.interval - drift)
    );
    console.log(this.timeout);
  }
}
