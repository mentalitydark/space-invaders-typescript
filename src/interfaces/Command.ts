import { EGameState } from "../enums"

export interface ICommand {
  keys: Record<string, boolean>
  gameState: EGameState
}

export interface ICommandProps {
  keys: Record<string, boolean>
  gameState: EGameState
}