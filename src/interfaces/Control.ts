import { ICommand } from "./Command"
import { IGame } from "./Game"
import { IObserver } from "./Observer"

export interface IControl {
  game: IGame
  keys: Record<string, boolean>
  observers: Map<string, IObserver>
  addObserver(observer: IObserver): void
  removeObserver(observer: IObserver): void
  notifyObservers(command: ICommand): void
}

export interface IControlProps {
  game: IGame
}