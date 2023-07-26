import { defineComponent, h, Events, defineEmits, ObjectEmitsOptions, PropType, VNodeArrayChildren, } from "vue";
import {
    Color, useBackgroundColor,
    Rounding, useRounding

} from "../common";

export const FormTextInput = defineComponent({
    name: 'FormTextInput',
    props: {

    }
})
export const FormTextArea = defineComponent({
    name: 'FormTextArea',
    props: {
        id: [String],
        label: {
            type: Object as PropType<{
                placement: 'top' | 'bottom' | 'right' | 'left',
                value: string
            }> | Object as PropType<string>,
            required: true
        },
        /**
       * Specify a summary for the text area
       * @values small, normal, large
       */
        summary: {
            type: Object as PropType<{
                placement: 'top' | 'bottom' | 'right' | 'left',
                value: string
            }>
        },
        disabled: [Boolean],
        hidden: [Boolean],
        value: [String],
        rounded: {
            type: Object as PropType<Rounding>
        },
        onFocus: {
            type: Object as PropType<{
                test: string
            }>
        },
        onDisable: {
            type: Object as PropType<{
                background: Color
            }>
        }
    },
    emits: {
        onChange(input: string) { }
    },
    setup(props, { emit }) {
        const isString = (instance: any): instance is string => {
            return !Object.hasOwn(instance, 'placement') && !Object.hasOwn(instance, 'value')
        }
        const isObject = (instance: any): instance is { placement: 'top' | 'bottom' | 'right' | 'left', value: String } => {
            return Object.hasOwn(instance, 'placement') && Object.hasOwn(instance, 'value')
        }

        // Set Input ID
        let id = ''
        if (isObject(props.label)) {
            const id = props.id ? props.id : props.label.value.toLowerCase().replace(" ", "-")

            
        }
        if (isString(props.label)) {
            const id = props.id ? props.id : props.label.toLowerCase().replace(" ", "-")
            return () => {
                return h('div', { class: 'flex flex-1 flex-col' }, [
                    h('label', {
                        htmlFor: id,
                        class: 'font-medium text-sm'
                    }, props.label),
                    h('textarea', {
                        id,
                        type: 'text',
                        value: props.value,
                        disabled: props.disabled,
                        class: [
                            'p-1 h-36',
                            useRounding(props.rounded),
                            // 'border border-gray-900 rounded-md  hover:ring-1 focus:ring-1 focus:ring-primary-turquoise hover:ring-primary-turquoise outline-0 outline-primary-turquoise disabled:bg-gray-200'
                        ],
                        onInput(event: { target: HTMLInputElement }) {
                            emit('onChange', event.target.value as string)
                        },
                    })
                ])
            }
        }
    }
})
export const Form = defineComponent({
    name: 'Form',
    setup(props, { slots }) {
        return () => {
            return h('div', {
                class: 'flex flex-1'
            }, slots.default ? slots.default() : [])
        }
    },
})