import { EGameState } from "../enums";
import { IControl, IGame, IGameProps, IPlayer } from "../interfaces";
import { Control } from "./Control";
import { PlayerObserver } from "./Observers/PlayerObserver";

export class Game implements IGame {
  private _player: IPlayer
  private _control: IControl
  private _state: EGameState = EGameState.NOT_STARTED

  public constructor(props: IGameProps) {
    this._player = props.player

    this._control = new Control({ game: this })
    this.control.addObserver(new PlayerObserver(this._player))
  }

  public start() {
    this._state = EGameState.PLAYING
  }

  get player(): IPlayer { return this._player }
  get control(): IControl { return this._control }
  get state(): EGameState { return this._state }

  set player(player: IPlayer) { this._player = player }
  set control(control: IControl) { this._control = control }
  set state(state: EGameState) { this._state = state }
}