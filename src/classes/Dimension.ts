import { IDimension, IDimensionProps } from "../interfaces"

export class Dimension implements IDimension {
  private _width: number
  private _height: number

  public constructor({ width, height }: IDimensionProps) {
    this._width = width
    this._height = height
  }

  get width(): number { return this._width }
  get height(): number { return this._height }
  get halfWidth(): number { return this.width / 2 }
  get halfHeight(): number { return this.height / 2 }
  get json(): { width: number, height: number } { return { width: this._width, height: this._height } }

  set width(value: number) { this.width = value }
  set height(value: number) { this.height = value }
}