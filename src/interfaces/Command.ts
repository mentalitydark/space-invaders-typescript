import { ECommandType } from "../enums"

export interface ICommand {
  keys: Record<string, boolean>
  type: ECommandType
}

export interface ICommandProps {
  keys: Record<string, boolean>
  type: ECommandType
}