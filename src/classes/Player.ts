import { TCharacterType } from "../enums"
import { IPlayer, IPlayerProps } from "../interfaces"
import { Character } from "./Character"

export class Player extends Character implements IPlayer {
  protected _type = TCharacterType.PLAYER

  public constructor(props: IPlayerProps) {
    super(props)
  }

}