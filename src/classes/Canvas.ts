import { ICanvas, IDimension, IPosition } from "../interfaces"
import { Dimension } from "./Dimension"
import { Position } from "./Position"

export class Canvas implements ICanvas {
  private _canvas: HTMLCanvasElement
  private _dimensions: IDimension

  public constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas

    this._dimensions = new Dimension({ width: canvas.width, height: canvas.height })
    this.context.imageSmoothingEnabled = false
  }

  public clear(): void {
    this.context.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
  }

  public fillRect(color: string, position: IPosition, dimension: IDimension): void {
    this.context.save()

    this.context.fillStyle = color
    this.context.fillRect(position.x, position.y, dimension.width, dimension.height)
    
    this.context.restore()
  }

  public drawBackground(): void {
    this.fillRect("#383838", Position.create(0, 0), this.dimensions)
  }

  public get canvas(): HTMLCanvasElement { return this._canvas }
  public get context(): CanvasRenderingContext2D  { return this._canvas.getContext("2d")! }
  public get dimensions(): IDimension { return this._dimensions }
}