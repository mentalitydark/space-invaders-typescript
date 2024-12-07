import { ICharacter, ICharacterProps } from "../interfaces"
import { GameObject } from "./GameObject"
import { Health } from "./Health"

export class Character extends GameObject implements ICharacter {
  private _name
  private _health

  public constructor({ name, health, ...GameObjectProps }: ICharacterProps) {
    super(GameObjectProps)

    this._name = name
    this._health = new Health(health)
  }

  get name() { return this._name }
  get health() { return this._health }
}