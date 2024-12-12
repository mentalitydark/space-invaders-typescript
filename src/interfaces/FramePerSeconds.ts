export interface IFramePerSeconds {
  lastTime: DOMHighResTimeStamp
  currentTime: DOMHighResTimeStamp
  value: number

  update(): void
}