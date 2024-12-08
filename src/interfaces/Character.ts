import { TCharacterType } from "../enums"
import { IGameObject, IGameObjectProps } from "./GameObject"
import { IHealth } from "./Health"

export interface ICharacter extends IGameObject {
  type: TCharacterType
  name: string
  health: IHealth
}

export interface ICharacterProps extends IGameObjectProps {
  name: string
  health: number
}