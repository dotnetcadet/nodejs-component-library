import { defineComponent, h, PropType } from "vue";
import { useVerticalSpacing, useHorizontalSpacing, useClassNames, Spacing } from "../common";

export const FlexColumn = defineComponent({
    name: 'FlexColumn',
    props: {
        reverse: {
            type: [Boolean],
            default: false
        }
    },
    setup(props, { slots }) {



        return () => {
            return h('div', {
                class: [
                    'flex flex-1',
                    useClassNames(props.reverse ? 'flex-col-reverse' : 'flex-col')
                ]
            }, (slots.default ? slots.default() : []))
        }

    }
})
export const FlexRow = defineComponent({
    name: 'FlexRow',
    props: {
        reverse: {
            type: [Boolean],
            default: false
        }
    },
    setup(props, { slots }) {



        return () => {
            return h('div', {
                class: [
                    'flex flex-1',
                    useClassNames(props.reverse ? 'flex-row-reverse' : 'flex-col')
                ]
            }, (slots.default ? slots.default() : []))
        }
    }
})
export const Flex = defineComponent({
    name: 'Flex',
    props: {
        horizontalSpacing: {
            type: Object as PropType<Spacing>
        },
        verticalSpacing: {
            type: Object as PropType<Spacing>
        }
    },
    setup(props, { slots }) {
        return () => {
            return h('div', {
                class: [
                    'flex',
                    useVerticalSpacing(props.verticalSpacing),
                    useHorizontalSpacing(props.horizontalSpacing)
                ]
            }, (slots.default ? slots.default() : []))
        }
    }
})