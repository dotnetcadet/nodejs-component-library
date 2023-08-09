import { defineComponent, PropType, h } from "vue";
import { Margin, Padding, Rounded, Border, Color, Opacity, Shadow, Spacing, Hight, Overflow } from "../../types";
import { useStyling, useStylingConfig } from "../../hooks";
import { nonNullObject } from "../../utils/non-null-object";

// Define Common Props
const hight         = [String, Object]  as PropType<Hight>
const margin        = [Number, Object]  as PropType<Margin>
const padding       = [Number, Object]  as PropType<Padding>
const rounded       = [String, Object]  as PropType<Rounded>
const border        = [Number, Object]  as PropType<Border>
const spacing       = [Object]          as PropType<Spacing>
const shadow        = [String, Object]  as PropType<Shadow>
const background    = [String]          as PropType<Color>
const opacity       = [Number]          as PropType<Opacity>
const overflow      = [String, Object]  as PropType<Overflow>

export const Flex = defineComponent({
    name: 'Flex',
    props: { margin, padding, rounded, border, spacing, shadow, background, opacity, hight, overflow },
    setup(props, { slots }) {
        return () => {
            const stylingConfig = useStylingConfig()
            const styling = useStyling({
                ...stylingConfig?.flex,
                ...nonNullObject(props)
            })
            const classes = ['flex']
            if (styling) {
                classes.push(styling)
            }
            return h('div', {
                class: classes,
            }, (slots.default ? slots.default() : []))
        }
    }
})
export const FlexRow = defineComponent({
    name: 'FlexRow',
    props: { reverse: Boolean, margin, padding, rounded, border, spacing, shadow, background, opacity, hight, overflow },
    setup(props, { slots }) {
        return () => {
            const stylingConfig = useStylingConfig()
            const styling = useStyling({
                ...stylingConfig?.flexRow,
                ...nonNullObject(props)
            })
            const classes = ['flex flex-1']
            if (styling) {
                classes.push(styling)
            }
            if (props.reverse) {
                classes.push('flex-row-reverse')
            }
            else {
                classes.push('flex-row')
            }
            return h('div', {
                class: classes,
            }, (slots.default ? slots.default() : []))
        }
    }
})
export const FlexColumn = defineComponent({
    name: 'FlexColumn',
    props: { reverse: Boolean, margin, padding, rounded, border, spacing, shadow, background, opacity, hight, overflow },
    setup(props, { slots }) {
        return () => {
            const stylingConfig = useStylingConfig()
            const styling = useStyling({
                ...stylingConfig?.flexRow,
                ...nonNullObject(props)
            })
            const classes = ['flex flex-1']
            if (styling) {
                classes.push(styling)
            }
            if (props.reverse) {
                classes.push('flex-col-reverse')
            }
            else {
                classes.push('flex-col')
            }
            return h('div', {
                class: classes,
            }, (slots.default ? slots.default() : []))
        }
    }
})