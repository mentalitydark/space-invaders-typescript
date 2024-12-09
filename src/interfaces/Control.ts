import { ICommand } from "./Command"
import { IObserver } from "./Observer"

export interface IControl {
  keys: Record<string, boolean>
  observers: Map<string, IObserver>
  addObserver(observer: IObserver): void
  removeObserver(observer: IObserver): void
  notifyObservers(command: ICommand): void
}