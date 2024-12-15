import { IHealth } from "../interfaces"

export class Health implements IHealth {
  private _max
  private _current

  public constructor(value: number) {
    this._max = value
    this._current = value
  }

  public takeDamage(amount: number) {
    this._current -= amount
  }

  public heal(amount: number) {
    this._current += amount

    if (this._current > this._max) {
      this._current = this._max
    }
  }
  
  get max(): number { return this._max }
  get current(): number { return this._current }
  get isAlive(): boolean { return this._current > 0 }
}