import { IFramePerSeconds, IFramePerSecondsProps } from "../interfaces"
import { TextObject } from "./TextObject"

export class FramePerSeconds extends TextObject implements IFramePerSeconds {
  private _lastTime: DOMHighResTimeStamp
  private _currentTime: DOMHighResTimeStamp

  public constructor(props: IFramePerSecondsProps) {
    super(props)

    this._lastTime = 0
    this._currentTime = performance.now()
  }

  public update(): void {
    this._lastTime = this._currentTime
    this._currentTime = performance.now()

    const seconds = (this._currentTime - this._lastTime) / 1000

    this._value = String(Math.round(1 / seconds)).padStart(2, "0")
  }

  get lastTime(): DOMHighResTimeStamp { return this._lastTime }
  get currentTime(): DOMHighResTimeStamp { return this._currentTime }
}