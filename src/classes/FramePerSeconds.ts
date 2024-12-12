import { IFramePerSeconds } from "../interfaces"

export class FramePerSeconds implements IFramePerSeconds {
  private _lastTime: DOMHighResTimeStamp
  private _currentTime: DOMHighResTimeStamp
  private _value: number = 0

  public constructor() {
    this._lastTime = 0
    this._currentTime = performance.now()
  }

  get lastTime(): DOMHighResTimeStamp { return this._lastTime }
  get currentTime(): DOMHighResTimeStamp { return this._currentTime }
  get value(): number { return this._value }

  public update(): void {
    this._lastTime = this._currentTime
    this._currentTime = performance.now()

    const seconds = (this._currentTime - this._lastTime) / 1000

    this._value = Math.round(1 / seconds)
  }


}