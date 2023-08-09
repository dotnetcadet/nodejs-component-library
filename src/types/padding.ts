import { Pixel } from "./pixel"

export type Padding = Pixel | {
    right?: Pixel
    left?: Pixel
    bottom?: Pixel
    top?: Pixel
}