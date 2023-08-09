import { defineComponent, h } from "vue"

export const Spinner = defineComponent({
    name: 'Spinner',
    setup() {
        return () => {
            return h('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox:'0 0 24 24',
                class: 'animate-spin -ml-1 mr-3 h-5 w-5'
            }, [
                h('circle', {
                    class: 'opacity-25',
                    cx: '12',
                    cy: '12',
                    r: '10',
                    stroke: 'currentColor',
                    strokeWidth: '4',
                    style:"--darkreader-inline-stroke: currentColor;"
                }),
                h('path', {
                    fill: 'currentColor',
                    class: 'opacity-75',
                    d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
                    style:"--darkreader-inline-fill: currentColor;"
                })
            ])
        }   
    }
})

// <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//       <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"></circle>
//       <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path>
//     </svg>