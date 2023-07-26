import { defineComponent, h , PropType} from "vue";
import { Opacity, useClassNames, useOpacity } from "../common";




export const PulseLoader = defineComponent({
    name: 'LoaderPulse',
    props: {
        isLoading: {
            type: [Boolean],
            default: false
        },
        opacity: {
            type: Object as PropType<Opacity>
        }
    },
    setup(props, { slots }) {


        return () => {
            return h('div', {
                class: [
                    'flex flex-1',
                    useClassNames(props.isLoading ? `animate-pulse ${useOpacity(props.opacity)}` : '')
                ]
            }, slots.default ? slots.default() : [])
        }
    }
})