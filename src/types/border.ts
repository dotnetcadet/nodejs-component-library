import { Color } from "./color"

export type BorderSize = 0 | 1 | 2 | 4 | 8
export type BorderType = 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden'
export type BorderStyling = { type?: BorderType, color?: Color }
export type BorderFull = { size: BorderSize } & BorderStyling
export type BorderLeft = { left: BorderSize } & BorderStyling
export type BorderRight = { right: BorderSize } & BorderStyling
export type BorderTop = { top: BorderSize } & BorderStyling
export type BorderBottom = { bottom: BorderSize } & BorderStyling
export type Border = BorderSize | BorderFull | BorderLeft | BorderRight | BorderTop | BorderBottom