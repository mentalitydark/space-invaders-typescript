import { EGameState } from "../../enums"
import { ICommand, IObserver, IPlayer } from "../../interfaces"

export class PlayerObserver implements IObserver {
  public readonly id: string = crypto.randomUUID()
  public readonly player: IPlayer

  public constructor(player: IPlayer) {
    this.player = player
  }

  public update(command: ICommand): void {
    if (command.gameState !== EGameState.PLAYING) {
      return
    }

    if (command.keys.ArrowUp) {
      this.player.position.y = this.player.position.y + 1
    }
    if (command.keys.ArrowDown) {
      this.player.position.y = this.player.position.y - 1
    }

    if (command.keys.ArrowLeft) {
      this.player.position.x = this.player.position.x - 1
    }
    if (command.keys.ArrowRight) {
      this.player.position.x = this.player.position.x + 1
    }
  }
}