import { OnMedia } from "./media"

export type GridColumnSpan = '1/4' | '1/2' | '1/3' | '3/4' | '4/5' | '1'
export type GridColumnLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GridColumnLocation = 'start' | 'center' | 'end' | OnMedia<GridColumnLength> | GridColumnLength
export type GridColumnConfig = {
    location?: GridColumnLocation
}
export type GridRowConfig = {

}
export type GridConfig = {
    columns?: OnMedia<GridColumnLength> | GridColumnLength
}