import { Dimension, Position } from "./classes"
import { Canvas } from "./classes/Canvas"

const app = document.querySelector<HTMLDivElement>("#app")!

const canvasElement = document.createElement('canvas')
canvasElement.id = "game"
canvasElement.width = 800
canvasElement.height = 600

app.append(canvasElement)

const canvas = new Canvas(canvasElement)
canvas.drawBackground()

canvas.fillRect("red", Position.create(10, 10), Dimension.create(10, 10))