import { Margin, Padding, Rounded, Border, Color, Opacity, Shadow, Spacing, Hight, Overflow } from ".";

export type FlexConfig = {
    margin?: Margin
    padding?: Padding
    rounded?: Rounded
    border?: Border
    shadow?: Shadow
    background?: Color
    opacity?: Opacity
    spacing?: Spacing
    hight?: Hight
    overflow?: Overflow
}
export type FlexRowConfig = FlexConfig & {
    reverse?: boolean
}
export type FlexColumnConfig = FlexConfig & {
    reverse?: boolean
}