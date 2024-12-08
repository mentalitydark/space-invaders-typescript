import { IDimension, IDimensionProps } from "./Dimension"
import { IPosition, IPositionProps } from "./Position"

export interface IGameObject {
  id: string
  dimension: IDimension
  position: IPosition
}

export interface IGameObjectProps {
  dimension: IDimensionProps
  position: IPositionProps
}