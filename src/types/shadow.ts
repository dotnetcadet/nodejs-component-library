import { Color } from "./color"

export type ShadowSize = 'sm' | 'md' | 'lg' | 'xl'
export type ShadowStyling = {
    size: ShadowSize
    color?: Color
}
export type Shadow = ShadowSize | ShadowStyling