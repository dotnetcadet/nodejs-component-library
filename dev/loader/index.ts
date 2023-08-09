import { defineComponent, h , PropType} from "vue";
import { Opacity } from "../../types";
import { withOpacity } from "../../hooks";

/**
 * A wrapper component for 
 */
export const PulseLoader = defineComponent({
    name: 'LoaderPulse',
    props: {
        isLoading: {
            type: [Boolean],
            default: false
        },
        opacity: [Number] as PropType<Opacity>
    },
    setup(props, { slots }) {
        return () => {
            return h('div', {
                class: [
                    'flex flex-1',
                    props.isLoading === true ? `animate-pulse ${withOpacity(props.opacity)}` : ''
                ]
            }, slots.default ? slots.default() : [])
        }
    }
})