import { Color, Opacity, Rounding, Siding, Size, Spacing } from "../types"
import { common, colors } from "../data"

const isSiding = (instance: any): instance is Siding => {
    return Object.hasOwn(instance, 'right') ||
        Object.hasOwn(instance, 'left') ||
        Object.hasOwn(instance, 'top') ||
        Object.hasOwn(instance, 'bottom')
}
const isRounding = (instance: any): instance is {
    top?: 'sm' | 'md' | 'lg' | 'xl'
    topRight?: 'sm' | 'md' | 'lg' | 'xl'
    topLeft?: 'sm' | 'md' | 'lg' | 'xl'
    bottom?: 'sm' | 'md' | 'lg' | 'xl'
    bottomRight?: 'sm' | 'md' | 'lg' | 'xl'
    bottomLeft?: 'sm' | 'md' | 'lg' | 'xl'
} => {
    if (typeof instance === 'string') {
        return false
    }
    return Object.hasOwn(instance, 'top') ||
        Object.hasOwn(instance, 'topRight') ||
        Object.hasOwn(instance, 'topLeft') ||
        Object.hasOwn(instance, 'bottom') ||
        Object.hasOwn(instance, 'bottomRight') ||
        Object.hasOwn(instance, 'bottomLeft')
}


export const useClassNames = (...classes: Array<boolean | string>) => {
    return classes.filter(Boolean).join(' ')
}
export const useVerticalSpacing = (spacing?: Spacing) => {
    if (!spacing) {
        return ''
    }

    return common.verticalSpacing[spacing]
}
export const useHorizontalSpacing = (spacing?: Spacing) => {
    if (!spacing) {
        return ''
    }

    return common.horizontalSpacing[spacing]
}
export const usePadding = (padding?: Size | Siding) => {
    if (!padding) {
        return ''
    }
    if (isSiding(padding)) {
        return useClassNames(
            padding.bottom ? common.paddingBottom[padding.bottom] : '',
            padding.top ? common.paddingTop[padding.top] : '',
            padding.left ? common.paddingLeft[padding.left] : '',
            padding.right ? common.paddingRight[padding.right] : '')
    } else {
        return common.padding[padding]
    }
}
export const useMargin = (margin?: Size | Siding) => {
    if (!margin) {
        return ''
    }
    if (isSiding(margin)) {
        return useClassNames(
            margin.bottom ? common.marginBottom[margin.bottom] : '',
            margin.top ? common.marginTop[margin.top] : '',
            margin.left ? common.marginLeft[margin.left] : '',
            margin.right ? common.marginRight[margin.right] : '')

    } else {
        return common.margin[margin]
    }
}
export const useRounding = (rounding?: Rounding) => {
    if (!rounding) {
        return ''
    }
    if (isRounding(rounding)) {
        return useClassNames(
            rounding.top ? common.roundedTop[rounding.top] : '',
            rounding.topLeft ? common.roundedTopLeft[rounding.topLeft] : '',
            rounding.topRight ? common.roundedTopRight[rounding.topRight] : '',
            rounding.bottom ? common.roundedBottom[rounding.bottom] : '',
            rounding.bottomLeft ? common.roundedBottomLeft[rounding.bottomLeft] : '',
            rounding.bottomRight ? common.roundedBottomRight[rounding.bottomRight] : ''
        )
    }
    else {
        return common.rounded[rounding]
    }
}
export const useOpacity = (opacity?: Opacity) =>{
    if (!opacity) {
        return ''
    }
    return common.opacity[opacity]
}
export const useBackgroundColor = (color?: Color) => {
    if (!color) {
        return ''
    }
    return colors.background[color]
}