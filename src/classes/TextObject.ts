import { ITextObject, ITextObjectProps } from "../interfaces"
import { GameObject } from "./GameObject"

export abstract class TextObject extends GameObject implements ITextObject {
  protected _value: string

  public constructor({ value, ...props }: ITextObjectProps) {
    super(props)
    
    this._value = value
  }

  get value(): string { return this._value }

  set value(value: string) { this._value = value }
}