import { ConsoleDisplay, Enemy, Game, GameObjectRenderer, Player } from "./classes";
import { EGameState } from "./enums";

const player = new Player({
  name: "Player",
  health: 100,
  dimension: { height: 100, width: 100 },
  position: { x: 0, y: 0 },
})

const enemy = new Enemy({
  name: "enemy",
  health: 100,
  dimension: { height: 100, width: 100 },
  position: { x: 0, y: 0 },
})

const screen = { width: 800, height: 600 }

const game = new Game({
  player,
  screen
})

game.display = new ConsoleDisplay()

game.state = EGameState.PLAYING
game.start()

game.display.addRenderer(0, new GameObjectRenderer(game.player))
game.display.addRenderer(0, new GameObjectRenderer(enemy))