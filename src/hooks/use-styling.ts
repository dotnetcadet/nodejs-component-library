import { isNumber } from "../utils/is-number"
import { isObject } from "../utils/is-object"
import { useClasses } from "./use-classes"
import { classes, media } from "../data";
import {
    OnMedia,
    Border,
    BorderBottom,
    BorderFull,
    BorderLeft,
    BorderRight,
    BorderSize,
    BorderTop,
    BorderType,
    Color,
    Hight,
    HightMax,
    HightSize,
    Margin,
    Opacity,
    Overflow,
    OverflowType,
    Padding,
    Pixel,
    Rounded,
    RoundedSize,
    Shadow,
    ShadowSize,
    ShadowStyling,
    Spacing,
    Width,
    Text
} from "../types"

const isOnMedia = <T>(obj?: any): obj is OnMedia<T> => {
    const keys = ['sm', 'md', 'lg', 'xl']
    for (let i = 0; i < keys.length; i++) {
        if (!Object.hasOwn(obj, keys[i])) {
            return false
        }
    }
    return true;
}
const padding = (value?: Padding): string => {
    const isPadding = (obj: any): obj is Exclude<Padding, Pixel> => {
        const keys = ['right', 'left', 'top', 'bottom']
        if (isObject(obj)) {
            for (const key in keys) {
                if (Object.hasOwn(obj, key)) {
                    return true
                }
            }
        }
        return false
    }
    if (!value) return ''
    if (isPadding(value)) {
        return useClasses(
            value.bottom ? classes.padding.bottom[value.bottom] : '',
            value.top ? classes.padding.top[value.top] : '',
            value.left ? classes.padding.left[value.left] : '',
            value.right ? classes.padding.right[value.right] : '')
    } else {
        return classes.padding.standard[value]
    }
}
const margin = (value?: Margin): string => {
    const isMargin = (obj: any): obj is Exclude<Margin, Pixel> => {
        const keys = ['right', 'left', 'top', 'bottom']
        if (isObject(obj)) {
            for (const key in keys) {
                if (Object.hasOwn(obj, key)) {
                    return true
                }
            }
        }
        return false
    }
    if (!value) return ''
    if (isMargin(value)) {
        return useClasses(
            value.bottom ? classes.margin.bottom[value.bottom] : '',
            value.top ? classes.margin.top[value.top] : '',
            value.left ? classes.margin.left[value.left] : '',
            value.right ? classes.margin.right[value.right] : '')
    } else {
        return classes.margin.standard[value]
    }
}
const opacity = (value?: Opacity): string => {
    return value ? classes.opacity[value] : ''
}
const overflow = (value?: Overflow): string => {
    const isOverflow = (obj: any): obj is Exclude<Overflow, OverflowType> => {
        if (isObject(obj)) {
            return Object.hasOwn(obj, 'vertical') || Object.hasOwn(obj, 'horizontal')
        }
        return false
    }
    if (!value) return ''
    if (isOverflow(value)) {
        return useClasses(
            value.horizontal ? classes.overflow.horizontal[value.horizontal] : '',
            value.vertical ? classes.overflow.vertical[value.vertical] : ''
        )
    }
    return classes.overflow.standard[value]
}
const border = (value?: Border): string => {
    const isBorderSize = (obj: any): obj is Extract<Border, BorderSize> => {
        return isNumber(obj) && [0, 1, 2, 4, 8].includes(obj)
    }
    const isBorderFull = (obj: any): obj is Extract<Border, BorderFull> => {
        return Object.hasOwn(obj, 'size')
    }
    const isBorderRight = (obj: any): obj is Extract<Border, BorderRight> => {
        return Object.hasOwn(obj, 'right')
    }
    const isBorderLeft = (obj: any): obj is Extract<Border, BorderLeft> => {
        return Object.hasOwn(obj, 'left')
    }
    const isBorderTop = (obj: any): obj is Extract<Border, BorderTop> => {
        return Object.hasOwn(obj, 'top')
    }
    const isBorderBottom = (obj: any): obj is Extract<Border, BorderBottom> => {
        return Object.hasOwn(obj, 'bottom')
    }
    const type = (type?: BorderType) => {
        if (!type) return ''
        switch (type) {
            case 'solid': return 'border-solid'
            case 'dashed': return 'border-dashed'
            case 'dotted': return 'border-dotted'
            case 'double': return 'border-double'
            case 'hidden': return 'border-hidden'
        }
    }
    if (!value) {
        return ''
    }
    if (isBorderSize(value)) {
        return classes.border.standard[value]
    }
    let styling = [
        type(value.type)
    ]
    if (value.color) {
        styling.push(classes.border.colors[value.color])
    }
    if (isBorderFull(value)) {
        styling.push(classes.border.standard[value.size])
    }
    if (isBorderLeft(value)) {
        styling.push(classes.border.left[value.left])
    }
    if (isBorderRight(value)) {
        styling.push(classes.border.right[value.right])
    }
    if (isBorderTop(value)) {
        styling.push(classes.border.top[value.top])
    }
    if (isBorderBottom(value)) {
        styling.push(classes.border.bottom[value.bottom])
    }
    return styling.filter(i => i !== '').join(' ').trim()
}
const rounded = (value?: Rounded): string => {
    const isRounding = (obj: any): obj is Exclude<Rounded, RoundedSize> => {
        if (isObject(obj)) {
            let keys = ['top', 'topRight', 'topLeft', 'bottom', 'bottomRight', 'bottomLeft']
            for (let key in keys) {
                if (Object.hasOwn(obj, key)) {
                    return true
                }
            }
        }
        return false
    }
    if (!value) return ''
    if (isRounding(value)) {
        return useClasses(
            value.top ? classes.rounded.top[value.top] : '',
            value.topLeft ? classes.rounded.topLeft[value.topLeft] : '',
            value.topRight ? classes.rounded.topRight[value.topRight] : '',
            value.bottom ? classes.rounded.bottom[value.bottom] : '',
            value.bottomLeft ? classes.rounded.bottomLeft[value.bottomLeft] : '',
            value.bottomRight ? classes.rounded.bottomRight[value.bottomRight] : ''
        )
    }
    return classes.rounded.standard[value]
}
const hight = (value?: Hight): string => {
    const isHightMax = (obj: any): obj is HightMax => {
        return Object.hasOwn(obj, 'max')
    }
    if (!value) return ''
    if (isOnMedia<Hight>(value)) {
        return [
            media.hight.sm[value.sm],
            media.hight.md[value.md],
            media.hight.lg[value.lg],
            media.hight.xl[value.xl]
        ].join(' ').trim()
    }
    if (isHightMax(value)) {

    }
    return classes.hight.standard[value as HightSize]
}
const width = (value?: Width): string => {
    return ''
}
const text = (value?: Text): string => {
    let styling: string[] = []
    if (value?.color) {
        styling.push(classes.text.color[value.color])
    }
    if (value?.italic === true) {
        styling.push('italic')
    }
    if (value?.size) {
        styling.push(classes.text.size[value.size])
    }
    if (value?.align) {
        styling.push(classes.text.align[value.align])
    }
    return styling.join(' ').trim()
}
const spacing = (value?: Spacing) => {
    return useClasses(
        value?.horizontal ? classes.spacing.horizontal[value.horizontal] : '',
        value?.vertical ? classes.spacing.vertical[value.vertical] : ''
    )
}
const shadow = (value?: Shadow): string => {
    const isShadowStyling = (obj: any): obj is Extract<Shadow, ShadowStyling> => {
        if (isObject(obj)) {
            return Object.hasOwn(obj, 'size')
        }
        return false
    }
    const get = (value: ShadowSize) => {
        switch (value) {
            case 'sm': return 'shadow-sm'
            case 'md': return 'shadow-md'
            case 'lg': return 'shadow-lg'
            case 'xl': return 'shadow-xl'
        }
    }
    if (!value) return ''
    if (isShadowStyling(value)) {
        const strings = [
            get(value.size)
        ]
        if (value.color) {
            strings.push(classes.shadow.color[value.color])
        }

        return strings.join(' ').trim()
    }
    return get(value)
}
const background = (value?: Color): string => {
    return ''
}
const stylers = {
    margin,
    padding,
    border,
    opacity,
    overflow,
    rounded,
    hight,
    width,
    text,
    spacing,
    shadow,
    background
}
export const useStyling = (obj: Object) => {
    let classes: string[] = []
    Object.entries(obj).forEach(entry => {
        if (entry[1] !== undefined && entry[1] !== null) { // Check to ensure value is NOT null or undefined
            if (Object.hasOwn(stylers, entry[0])) { // Ensure Key is in styler object
                classes.push((stylers as any)[entry[0]](entry[1]))
            }
        }
    })
    return classes.join(' ').trim()
}