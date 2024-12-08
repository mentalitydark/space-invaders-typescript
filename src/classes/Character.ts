import { TCharacterType } from "../enums"
import { ICharacter, ICharacterProps } from "../interfaces"
import { GameObject } from "./GameObject"
import { Health } from "./Health"

export abstract class Character extends GameObject implements ICharacter {
  protected abstract _type: TCharacterType
  private _name
  private _health

  public constructor({ name, health, ...GameObjectProps }: ICharacterProps) {
    super(GameObjectProps)

    this._name = name
    this._health = new Health(health)
  }

  get type() { return this._type }
  get name() { return this._name }
  get health() { return this._health }
}