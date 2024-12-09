import { ICommand, IControl, IObserver } from "../interfaces"
import { Command } from "./Command"

export class Control implements IControl {
  private _keys: Record<string, boolean> = {}
  private _observers: Map<string, IObserver> = new Map()

  public constructor() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.keys[event.key] = true

      const command = new Command({ keys: this.keys })
      this.notifyObservers(command)
    })

    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.keys[event.key] = false

      const command = new Command({ keys: this.keys })
      this.notifyObservers(command)
    })
  }

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