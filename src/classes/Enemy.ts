import { ECharacterType } from "../enums"
import { IEnemy, IEnemyProps } from "../interfaces"
import { Character } from "./Character"

export class Enemy extends Character implements IEnemy {
  protected _type = ECharacterType.ENEMY

  public constructor(props: IEnemyProps) {
    super(props)
  }
}