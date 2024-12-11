import { EGameState } from "../enums";
import { IControl } from "./Control";
import { IPlayer } from "./Player";

export interface IGame {
  player: IPlayer
  control: IControl
  state: EGameState
}

export interface IGameProps {
  player: IPlayer
}