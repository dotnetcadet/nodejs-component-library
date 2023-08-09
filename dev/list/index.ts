import { defineComponent, h } from "vue";

export const ListItem = defineComponent({
    name: 'ListItem',
    props: {

    }
})
export const ListNavItem = defineComponent({
    name: 'ListNavItem',
    setup(props, ctx) {
        
    },
})
export const ListPaginator = defineComponent({
    name: 'ListPaginator',
    props: {
        hasNext: Boolean,
        hasPrevious: Boolean
    },
    emits: {
        onNext() {

        },
        onPrevious() {

        }
    },
    setup(props, ctx) {
        
        return () => {
            return h('', {
                
            })
        }
    }
})
export const List = defineComponent({
    name: 'List',
    props: {

    },
    setup(props, { slots }) {
        

        return () => {
            return h('dev', {
                 
            })
        }
    },
})