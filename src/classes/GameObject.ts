import { IDimension, IGameObject, IGameObjectProps, IPosition } from "../interfaces"
import { Dimension } from "./Dimension"
import { Position } from "./Position"

export abstract class GameObject implements IGameObject {
  private _id: string
  private _dimension: IDimension
  private _position: IPosition

  public constructor({ dimension, position }: IGameObjectProps) {
    this._id = crypto.randomUUID()
    
    this._dimension = new Dimension(dimension)
    this._position = new Position(position)
  }

  get id(): string { return this._id }
  get dimension(): IDimension { return this._dimension }
  get position(): IPosition { return this._position }

  set dimension(value: IDimension) { this._dimension = value }
  set position(value: IPosition) { this._position = value }
}