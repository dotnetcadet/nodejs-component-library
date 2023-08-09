import { defineComponent, h, inject, provide, PropType } from "vue";
import { GridColumnLength, GridColumnSizing, GridColumnLocation, GridColumnSpan } from "./types";
import { Color, Rounded, Padding, Pixel } from "../common/types";
import {withBackground, withMargin, withPadding, withRounded} from "../common/utils";
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
const useGridColumnLocation = (size: GridColumnLength | GridColumnSizing, location?: GridColumnLocation) => {
    if (location && isGridColumnSizing(size)) {
        switch (location) {
            case 'start': {
                return 'lg:col-start-1 md:col-start-1 sm:col-start-1'
            }
            case 'end': {
                var large = (size.onLarge + 1) as GridColumnLength
                var medium = (size.onMedium + 1) as GridColumnLength
                var small = (size.onSmall + 1) as GridColumnLength

                return `${grid.columns.locations.large.end[large]} ${grid.columns.locations.medium.end[medium]} ${grid.columns.locations.small.end[small]}`
            }
            case 'center': {
                var lstart = (Math.round(size.onLarge * .5)) as GridColumnLength
                var lend = (Math.round(size.onLarge * .5) + 1) as GridColumnLength

                var mstart = (Math.round(size.onMedium * .5)) as GridColumnLength
                var mend = (Math.round(size.onMedium * .5) + 1) as GridColumnLength

                var sstart = (Math.round(size.onSmall * .5)) as GridColumnLength
                var send = (Math.round(size.onSmall * .5) + 1) as GridColumnLength

                var value = `${grid.columns.locations.large.start[lstart]} ${grid.columns.locations.large.end[lend]} ` +
                    `${grid.columns.locations.medium.start[mstart]} ${grid.columns.locations.medium.end[mend]} ` +
                    `${grid.columns.locations.small.start[sstart]} ${grid.columns.locations.small.end[send]} `


                return value
            }
        }
    }
    return ''
}

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
            type: Object as PropType<Pixel> | Object as PropType<Padding>
        },
        rounded: {
            type: Object as PropType<Rounded>
        },
        padding: {
            type: Object as PropType<Pixel> | Object as PropType<Padding>
        },
        background: {
            type: Object as PropType<Color>
        }
    },
    setup(props, { slots }) {
        const grid = inject<GridInfo>(injectionKey) as GridInfo

        return () => {
            return h('div', {

                class: [
                    withMargin(props.margin),
                    withPadding(props.padding),
                    withRounded(props.rounded),
                    withBackground(props.background),
                    useGridColumnSpan(grid.columns, props.span),
                    useGridColumnLocation(grid.columns, props.location)
                ]
            }, (slots.default ? slots.default() : []))
        }
    },
})
export const GridRow = defineComponent({

})

export const Grid = defineComponent({
    name: 'Grid',
    props: {
        rows: {

        },
        /**
         * Specify either a standard column size or a column size on screen change
         */
        columns: {
            type: [Number, Object] as PropType<GridColumnSizing> | Object as PropType<GridColumnLength>,
            default: {
                onSmall: 1,
                onMedium: 2,
                onLarge: 3
            }
        },
        margin: {
            type: Object as PropType<Pixel> | Object as PropType<Padding>
        },
        padding: {
            type: Object as PropType<Pixel> | Object as PropType<Padding>
        },
        rounded: {
            type: Object as PropType<Rounded>
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

        const classes = isGridColumnSizing(props.columns) ? [
            grid.columns.sizes.small[props.columns.onSmall],
            grid.columns.sizes.medium[props.columns.onMedium],
            grid.columns.sizes.large[props.columns.onLarge]
        ].join(' ').trim() : grid.columns.sizes.normal[props.columns]

        return () => {
            return h('div', {
                class: [
                    `grid`,
                    classes,
                    withMargin(props.margin),
                    withPadding(props.padding),
                    withRounded(props.rounded),
                    withBackground(props.background)
                ]
            }, (slots.default ? slots.default() : []))
        }
    }
})



