import { EGameState } from "../enums";
import { IControl } from "./Control";
import { IDimension, IDimensionProps } from "./Dimension";
import { IFramePerSeconds } from "./FramePerSeconds";
import { IPlayer } from "./Player";

export interface IGame {
  player: IPlayer
  control: IControl
  state: EGameState
  screen: IDimension
  FPS: IFramePerSeconds

  start(): void
  update(): void
}

export interface IGameProps {
  player: IPlayer
  screen: IDimensionProps
}