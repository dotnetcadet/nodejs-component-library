export type OverflowType = 'auto' | 'hidden' | 'visible' | 'scroll' | 'ellipsis'
export type Overflow = OverflowType | {
    vertical?: OverflowType
    horizontal?: OverflowType
}