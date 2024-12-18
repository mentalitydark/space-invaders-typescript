import { IGameObject, IGameObjectProps } from "./GameObject"

export interface ITextObject extends IGameObject {
  value: string
}

export interface ITextObjectProps extends IGameObjectProps {
  value: string
}