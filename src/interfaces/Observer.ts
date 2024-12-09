import { ICommand } from "./Command";

export interface IObserver {
  id: string
  update(command: ICommand): void
}