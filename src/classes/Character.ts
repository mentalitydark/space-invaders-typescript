import { ECharacterType } from "../enums"
import { ICharacter, ICharacterProps, IHealth } from "../interfaces"
import { GameObject } from "./GameObject"
import { Health } from "./Health"

export abstract class Character extends GameObject implements ICharacter {
  protected abstract _type: ECharacterType
  private _name: string
  private _health: IHealth

  public constructor({ name, health, ...GameObjectProps }: ICharacterProps) {
    super(GameObjectProps)

    this._name = name
    this._health = new Health(health)
  }

  get type() { return this._type }
  get name() { return this._name }
  get health() { return this._health }
}