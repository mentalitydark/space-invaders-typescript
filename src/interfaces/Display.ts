import { IRenderer } from "./Renderer";

type renderers = Map<IRenderer['id'], IRenderer>
type layers = Map<number, renderers>

export interface IDisplay {
  layers: layers
  addRenderer(layer: number, renderer: IRenderer): void
  removeRenderer(layer: number, renderer: IRenderer): void
  render(): void
}

export interface IDisplayProps {}