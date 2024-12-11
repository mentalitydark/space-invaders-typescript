import { ICommand, IControl, IControlProps, IGame, IObserver } from "../interfaces"
import { Command } from "./Command"

export class Control implements IControl {
  private _game: IGame
  private _keys: Record<string, boolean> = {}
  private _observers: Map<string, IObserver> = new Map()

  public constructor(props: IControlProps) {
    this._game = props.game

    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.keys[event.key] = true

      const command = new Command({ keys: this.keys, gameState: this._game.state })
      this.notifyObservers(command)
    })

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.keys[event.key] = false

      const command = new Command({ keys: this.keys, gameState: this._game.state })
      this.notifyObservers(command)
    })
  }

  get game(): IGame { return this._game }
  get keys() { return this._keys }
  get observers() { return this._observers }

  public addObserver(observer: IObserver): void {
    this.observers.set(observer.id, observer)
  }

  public removeObserver(observer: IObserver): void {
    this.observers.delete(observer.id)
  }

  public notifyObservers(command: ICommand) {
    this.observers.forEach(observer => observer.update(command))
  }
}