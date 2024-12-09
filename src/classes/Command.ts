import { ICommand, ICommandProps } from "../interfaces"

export class Command implements ICommand {
  private _keys: Record<string, boolean>

  public constructor({ keys }: ICommandProps) {
    this._keys = keys
  }

  get keys() { return this._keys }

}