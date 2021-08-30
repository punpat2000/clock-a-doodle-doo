import * as workerTimers from 'worker-timers';

export class AccurateInterval {
  private expected!: number;
  private timeout?: number;
  private dt!: number;
  isRunning = false;
  isStarted = false;
  constructor(private func: () => void, private interval: number) {}

  start(): void {
    if (this.isRunning) {
      throw new Error('cannot start while running');
    }
    if (this.isStarted) {
      throw new Error('cannot start if it is already started');
    }
    this.isRunning = true;
    this.isStarted = true;
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
    if (!this.isStarted) {
      throw new Error('cannot resume if it is not started');
    }
    if (this.isRunning) {
      throw new Error('cannot resume while running');
    }
    this.isRunning = true;
    this.expected = Date.now() + this.dt;
    this.timeout = workerTimers.setTimeout(
      this.step.bind(this),
      Math.max(0, this.dt)
    );
  }

  pause(): void {
    // record elapsed time
    this.dt = this.expected - Date.now();
    this.isRunning = false;
    if (this.timeout) {
      workerTimers.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
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
  }
}
