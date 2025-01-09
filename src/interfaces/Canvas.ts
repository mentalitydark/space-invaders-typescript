import { IDimension } from "./Dimension"
import { IPosition } from "./Position"

export interface ICanvas {
  canvas: HTMLCanvasElement
  dimensions: IDimension

  clear(): void
  fillRect(color: string, position: IPosition, dimension: IDimension): void
  drawBackground(): void
}