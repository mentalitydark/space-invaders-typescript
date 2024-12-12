import { EGameState } from "../enums";
import { IControl, IDimension, IFramePerSeconds, IGame, IGameProps, IPlayer } from "../interfaces";
import { Control } from "./Control";
import { Dimension } from "./Dimension";
import { FramePerSeconds } from "./FramePerSeconds";
import { PlayerObserver } from "./Observers/PlayerObserver";

export class Game implements IGame {
  private _player: IPlayer
  private _control: IControl
  private _state: EGameState = EGameState.NOT_STARTED
  private _screen: IDimension
  private _FPS: IFramePerSeconds

  public constructor({ player, screen }: IGameProps) {
    this._player = player
    this._screen = new Dimension(screen)

    this._control = new Control({ game: this })
    this.control.addObserver(new PlayerObserver(this._player))

    this._FPS = new FramePerSeconds()
  }

  public update(): void {
    this.FPS.update()
  }

  public start(): void {
    const loop = () => {
      this.update()

      requestAnimationFrame(loop.bind(this))
    }
    
    requestAnimationFrame(loop.bind(this))
  }

  get player(): IPlayer { return this._player }
  get control(): IControl { return this._control }
  get state(): EGameState { return this._state }
  get screen(): IDimension { return this._screen }
  get FPS(): IFramePerSeconds { return this._FPS }

  set player(player: IPlayer) { this._player = player }
  set control(control: IControl) { this._control = control }
  set state(state: EGameState) { this._state = state }
  set screen(screen: IDimension) { this._screen = screen }
}