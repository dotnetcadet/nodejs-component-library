import { defineComponent, h } from "vue";

export const ListItem = defineComponent({
    name: 'ListItem',
    props: {

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