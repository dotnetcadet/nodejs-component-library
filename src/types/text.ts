import { Color } from "./color";
import { Size } from "./size";

export type TextOverflow = 'clip' | 'ellipsis'
export type TextSize = Size | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
export type TextAlign = 'left' | 'right' | 'center' | 'justify'
export type Text = {
    color?: Color
    italic?: boolean
    size?: TextSize
    align?: TextAlign
    overflow?: TextOverflow
}