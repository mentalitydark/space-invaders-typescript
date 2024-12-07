import { IDimension, IGameObject, IGameObjectProps, IPosition } from "../interfaces"

export class GameObject implements IGameObject {
  private _id
  private _dimension
  private _position

  public constructor({ dimension, position }: IGameObjectProps) {
    this._id = crypto.randomUUID()
    
    this._dimension = dimension
    this._position = position
  }

  get id(): string { return this._id }
  get dimension(): IDimension { return this._dimension }
  get position(): IPosition { return this._position }

  set dimension(value: IDimension) { this._dimension = value }
  set position(value: IPosition) { this._position = value }
}