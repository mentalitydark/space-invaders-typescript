import { EGameState } from "../enums"
import { ICommand, ICommandProps } from "../interfaces"

export class Command implements ICommand {
  private _keys: Record<string, boolean>
  private _gameState: EGameState

  public constructor({ keys, gameState }: ICommandProps) {
    this._keys = keys
    this._gameState = gameState
  }

  get keys() { return this._keys }
  get gameState() { return this._gameState }

}