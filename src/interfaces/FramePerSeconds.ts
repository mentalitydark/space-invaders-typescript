import { ITextObject, ITextObjectProps } from "./TextObject"

export interface IFramePerSeconds extends ITextObject {
  lastTime: DOMHighResTimeStamp
  currentTime: DOMHighResTimeStamp

  update(): void
}

export interface IFramePerSecondsProps extends ITextObjectProps {}