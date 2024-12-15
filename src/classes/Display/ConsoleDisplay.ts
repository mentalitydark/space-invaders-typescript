import { IDisplay } from "../../interfaces"
import { Display } from "./Display";

export class ConsoleDisplay extends Display implements IDisplay {

    public render(): void {
    const layersSorted = new Map([...this._layers.entries()].sort((a, b) => a[0] - b[0]))

    for (const [layer, renderers] of layersSorted) {
      for (const [key, renderer] of renderers) {
        console.log({ layer, key, position: renderer.properties.position})
      }
    }
  }
}