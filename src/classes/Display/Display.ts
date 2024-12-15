import { IDisplay, IDisplayProps, IRenderer } from "../../interfaces"

export abstract class Display implements IDisplay {
  protected _layers: IDisplay['layers'] = new Map<number, Map<IRenderer['id'], IRenderer>>()

  public constructor(_: IDisplayProps = {}) {}

  public addRenderer(layer: number, renderer: IRenderer): void {
    if (!this._layers.has(layer)) {
      this._layers.set(layer, new Map());
    }

    const layerSelected = this._layers.get(layer)
    
    layerSelected!.set(renderer.id, renderer)
  }

  public removeRenderer(layer: number, renderer: IRenderer): void {
    if (this._layers.has(layer)) {
      this._layers.get(layer)!.delete(renderer.id)
    }
  }

  public abstract render(): void

  get layers() { return this._layers }
}