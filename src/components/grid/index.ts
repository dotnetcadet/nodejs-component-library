import { defineComponent, h, inject, provide, PropType } from "vue";
import { GridColumnLength, GridColumnSizing, GridColumnLocation, GridColumnSpan } from "./types";
import { useBackgroundColor, useMargin, usePadding, useRounding, Color, Rounding, Siding, Size } from "../common";
import { grid } from "./data";

const injectionKey = 'grid-data'

type GridInfo = {
    columns: GridColumnLength | GridColumnSizing
}

const isGridColumnSizing = (instance: any): instance is GridColumnSizing => {
    return Object.hasOwn(instance, 'onSmall') &&
        Object.hasOwn(instance, 'onMedium') &&
        Object.hasOwn(instance, 'onLarge')
}

// const useGridColumnSize = (size: { onLarge: GridColumnLength, onMedium: GridColumnLength, onSmall: GridColumnLength }) => {
//     return `${grid.columns.sizes.large[size.onLarge]} ${grid.columns.sizes.medium[size.onMedium]} ${grid.columns.sizes.small[size.onSmall]}`
// }
const useGridColumnSpan = (length: GridColumnLength | GridColumnSizing, span?: GridColumnSpan) => {
    if (!span) {
        return ''
    }
    const useSpanValue = (input: GridColumnSpan) => {
        switch (input) {
            case '1/4': return .25
            case '1/3': return .33
            case '1/2': return .50
            case '3/4': return .75
            case '4/5': return .80
            case '1': return 1
        }
    }

    if (isGridColumnSizing(length)) {
        var large = Math.round(useSpanValue(span) * length.onLarge)
        var medium = Math.round(useSpanValue(span) * length.onMedium)
        var small = Math.round(useSpanValue(span) * length.onSmall)

        small = small === 0 ? 1 : small
        medium = medium === 0 ? 1 : medium
        large = large === 0 ? 1 : large

        return `${grid.columns.spans.large[large as GridColumnLength]} ` +
            `${grid.columns.spans.medium[medium as GridColumnLength]} ` +
            `${grid.columns.spans.small[small as GridColumnLength]}`
    } else {
        var value = Math.round(useSpanValue(span) * length)

        value = value === 0 ? 1 : value

        return grid.columns.spans[value as GridColumnLength]
    }
}
const useGridColumnLocation = (size: { onLarge: GridColumnSize, onMedium: GridColumnSize, onSmall: GridColumnSize }, location?: GridColumnLocation) => {
    if (location) {
        switch (location) {
            case 'start': {
                return 'lg:col-start-1 md:col-start-1 sm:col-start-1'
            }
            case 'end': {
                var large = (size.onLarge + 1) as GridColumnSize
                var medium = (size.onMedium + 1) as GridColumnSize
                var small = (size.onSmall + 1) as GridColumnSize

                return `${grid.columns.locations.large.end[large]} ${grid.columns.locations.medium.end[medium]} ${grid.columns.locations.small.end[small]}`
            }
            case 'center': {
                var lstart = (Math.round(size.onLarge * .5)) as GridColumnSize
                var lend = (Math.round(size.onLarge * .5) + 1) as GridColumnSize

                var mstart = (Math.round(size.onMedium * .5)) as GridColumnSize
                var mend = (Math.round(size.onMedium * .5) + 1) as GridColumnSize

                var sstart = (Math.round(size.onSmall * .5)) as GridColumnSize
                var send = (Math.round(size.onSmall * .5) + 1) as GridColumnSize

                var value = `${grid.columns.locations.large.start[lstart]} ${grid.columns.locations.large.end[lend]} ` +
                    `${grid.columns.locations.medium.start[mstart]} ${grid.columns.locations.medium.end[mend]} ` +
                    `${grid.columns.locations.small.start[sstart]} ${grid.columns.locations.small.end[send]} `


                return value
            }
        }
    }
    return ''
}



export * from './types'
export const GridColumn = defineComponent({
    name: 'GridColumn',
    props: {
        span: {
            type: Object as PropType<GridColumnSpan> 
        },
        location: {
            type: Object as PropType<GridColumnLocation> 
        },
        margin: {
            type: Object as PropType<Size> | Object as PropType<Siding>
        },
        rounded: {
            type: Object as PropType<Rounding>
        },
        padding: {
            type: Object as PropType<Size> | Object as PropType<Siding>
        },
        background: {
            type: Object as PropType<Color>
        }
    },
    setup(props, { slots }) {
        const grid = inject<GridInfo>(injectionKey) as GridInfo

        console.log(grid)

        return () => {
            return h('div', {

                class: [
                    useMargin(props.margin),
                    usePadding(props.padding),
                    useRounding(props.rounded),
                    useBackgroundColor(props.background),
                    useGridColumnSpan(grid.columns, props.span)
                ]
            }, (slots.default ? slots.default() : []))
        }
    },
})
export const Grid = defineComponent({
    name: 'Grid',
    props: {
        rows: {

        },
        columns: {
            type: Object as PropType<GridColumnSizing> | Object as PropType<GridColumnLength> | undefined,
            default: {
                onSmall: 1,
                onMedium: 2,
                onLarge: 3
            }
        },
        margin: {
            type: Object as PropType<Size> | Object as PropType<Siding>
        },
        padding: {
            type: Object as PropType<Size> | Object as PropType<Siding>
        },
        rounded: {
            type: Object as PropType<Rounding>
        },
        background: {
            type: Object as PropType<Color>
        }
    },
    setup(props, { slots }) {
        // Provide data for Child Components to access
        provide(injectionKey, {
            columns: props.columns
        })

        let classes = isGridColumnSizing(props.columns) ? [
            grid.columns.sizes.small[props.columns.onSmall],
            grid.columns.sizes.medium[props.columns.onMedium],
            grid.columns.sizes.large[props.columns.onLarge]
        ].join(' ').trim() : grid.columns[props.columns]

        return () => {
            return h('div', {
                class: [
                    `grid`,
                    classes,
                    useMargin(props.margin),
                    usePadding(props.padding),
                    useRounding(props.rounded),
                    useBackgroundColor(props.background)
                ]
            }, (slots.default ? slots.default() : []))
        }
    }
})