import { defineComponent, PropType, h } from "vue";
import { withClasses } from "../common/utils";


export const Header = defineComponent({
    name: 'Header',
    props: {
        as: {
            type: Object as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
            default: 'h1'
        },
        italic: Boolean
    },
    setup(props, {slots}) {
        
        return () => {
            h(props.as, {
                class: [
                    withClasses(props.italic ? 'italic' : '')
                ]
            }, (slots.default ? slots.default() : []))
        }
    },
})

export const Text = defineComponent({
    name: 'Text',
    props: {
        italic: Boolean
    },
    setup(props, { slots }) {
        
        return () => {
            h('p', {
                class: [
                    withClasses(props.italic ? 'italic' : '')
                ]
            }, (slots.default ? slots.default() : []))
        }
    },
})