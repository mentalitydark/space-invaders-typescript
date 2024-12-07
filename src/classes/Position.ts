import { IPosition, IPositionProps } from "../interfaces";

export class Position implements IPosition {
  private _x
  private _y

  public constructor({ x, y }: IPositionProps) {
    this._x = x;
    this._y = y;
  }

  get x(): number { return this._x; }
  get y(): number { return this._y; }

  set x(value: number) { this._x = value; }
  set y(value: number) { this._y = value; }
}