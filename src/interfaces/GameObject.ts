import { IDimension } from "./Dimension";
import { IPosition } from "./Position";

export interface IGameObject {
  id: string
  dimension: IDimension
  position: IPosition
}