export type GridProps = {
    columns?: [GridColumnLength | GridColumnSizing]
    span?: GridColumnSpan
    location?: GridColumnLocation
}
export type GridColumnSizing = {
    onSmall: GridColumnLength
    onMedium: GridColumnLength
    onLarge: GridColumnLength
}
export type GridRowSizing = {
    
}
export type GridColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GridColumnSpan = '1/4' | '1/2' | '1/3' | '3/4' | '4/5' | '1'
export type GridColumnLocation = 'start' | 'end' | 'center'