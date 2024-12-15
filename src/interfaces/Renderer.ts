import { IGameObject } from "./GameObject"

export interface IRenderer<T extends IGameObject = IGameObject> {
  id: string
  object: T
  properties: T
}