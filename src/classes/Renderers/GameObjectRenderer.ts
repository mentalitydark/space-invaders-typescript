import { IGameObject, IRenderer } from "../../interfaces"

export class GameObjectRenderer implements IRenderer<IGameObject> {
  private _id: string
  private _object: IGameObject

  public constructor(object: IGameObject) {
    this._id = crypto.randomUUID()
    this._object = object
  }

  get properties(): IGameObject {
    return {
      id: this._object.id,
      position: this._object.position,
      dimension: this._object.dimension
    }
  }

  get object(): IGameObject { return this._object }
  get id(): string { return this._id }
}