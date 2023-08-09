import { Size } from "./size"
export type RoundedSize = Size | 'full'
export type Rounded = RoundedSize | {
    top?: RoundedSize
    topRight?: RoundedSize
    topLeft?: RoundedSize
    bottom?: RoundedSize
    bottomRight?: RoundedSize
    bottomLeft?: RoundedSize
}