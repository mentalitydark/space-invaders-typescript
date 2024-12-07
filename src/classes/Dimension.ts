import { IDimension } from "../interfaces";

export class Dimension implements IDimension {
  private _dimensions

  public constructor(dimensions: IDimension) {
    this._dimensions = dimensions;
  }

  get width(): number { return this._dimensions.width }
  get height(): number { return this._dimensions.height }
  get halfWidth(): number { return this.width / 2 }
  get halfHeight(): number { return this.height / 2 }
}