import { IGameObject, IGameObjectProps } from "./GameObject";
import { IHealth } from "./Health";

export interface ICharacter extends IGameObject {
  name: string;
  health: IHealth
}

export interface ICharacterProps extends IGameObjectProps {
  name: string;
  health: number
}