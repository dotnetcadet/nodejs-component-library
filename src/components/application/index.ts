import { createApp, defineComponent, inject, h, provide, ref, Component, PropType } from "vue";
import { RouterView, createRouter, createWebHashHistory } from "vue-router";
import { AppConfig, AppBuilder, AppRoutingConfig, AppLeftNavigationConfig, AppStylingConfig } from "./types"
// import {
//     Grid, GridColumn, GridRow,
//     List, ListItem, ListNavItem, ListPaginator,
//     Flex, FlexRow, FlexColumn,
//     Form, FormTextInput,
//     PulseLoader,
//     Text, Header,
//     Tab, TabSelect

// } from "../";

const injectionKey = 'application-config'


// const AppRightBar = defineComponent({
//     name: 'AppRightBar'
// })

// const AppLeftBar = defineComponent({
//     name: 'AppLeftBar',
//     props: {
//         isOpen: {
//             type: [Boolean]
//         }
//     },
//     emits: [
//         'open'
//     ],
//     setup(props, { emit }) {





//         return () => {

//             return h('div', {
//                 class: `fixed ${props.isOpen === true ? "w-80" : "w-16"} mt-16 h-screen duration-300 flex border-r bg-primary-900 shadow-xl rounded-r-md`
//             }, [
//                 h('nav', {
//                     class: 'flex flex-1 flex-col py-4 px-2 overflow-auto'
//                 }, [
//                     h('div', {
//                         class: 'flex flex-row-reverse py-2 pr-3'
//                     }, [
//                         h('div', {
//                             class: 'h-10 w-10 bg-black',
//                             onClick: () => {
//                                 emit('open')
//                             },
//                         })
//                     ]),
//                     h('ul', {
//                         role: 'list',
//                         class: 'items-center divide-solid divide-primary-500 divide-y-[1px] w-full'
//                     })
//                 ])
//             ])
//         }
//     },
// })
// const AppTopbar = defineComponent({

//     setup(props, ctx) {
//         return () => {
//             return h('div', {
//                 class: 'fixed flex flex-row flex-1 bg-primary-400 border-b border-primary-400 p-3 w-full shadow-md max-h-16  min-h-[5rem]'
//             })
//         }
//     },
// })
const App = defineComponent({
    name: 'Application',
    components: {
        RouterView,
        // AppLeftBar,
        // AppTopbar
    },
    props: {
        leftNavComponent: {
            type: Object as PropType<Component>
        }
    },
    setup(props, { slots }) {
        const isOpen = ref(true)

        provide<AppConfig>(injectionKey, {

        })

        return () => {
            return h('div', null, [
                h(RouterView)
            ])
            return h('div', null, [
                h('div', { class: 'flex flex-1 flex-row' }, [
                    // h(AppLeftBar, {
                    //     isOpen: isOpen.value,
                    //     onOpen() {
                    //         isOpen.value = !isOpen.value
                    //     }
                    // }),
                    h('div', { class: 'flex flex-1 flex-col' }, [
                        // h(AppTopbar),
                        h('main', {
                            class: `${isOpen ? "pl-80" : "pl-16"} pt-16 duration-300`
                        }, [
                            h(RouterView)
                        ])
                    ])
                ])
            ])
        }
    }
})
const useAppConfig = (): AppConfig | undefined => {
    return inject<AppConfig>(injectionKey)
}
const appBuilder = (): AppBuilder => {
    let builder: AppBuilder

    // Configuration to be used on build
    let routingConfig: AppRoutingConfig | undefined
    let stylingConfig: AppStylingConfig | undefined = {}
    
   
    const useRouting = (config: AppRoutingConfig): AppBuilder => {
        routingConfig = {
            ...config
        }
        return builder
    }
    const useStyling = (config: AppStylingConfig): AppBuilder => {
        stylingConfig = {
            ...config
        }
        return builder
    }
    const useTopNavigation = (config: {

    }): AppBuilder => {

        return builder
    }
    const useLeftNavigation = (config: AppLeftNavigationConfig): AppBuilder => {

        //leftNavComponent = config.component
        return builder
    }
    const useRightNavigation = (config: {

    }): AppBuilder => {

        return builder
    }
    
    const useAuthProvider = (config: {

    }): AppBuilder => {
        return builder
    }
    const build = () => {
        const app = createApp(App, {
            // Pass props here to app root
        })
        
        // app.use({
        //     install(app, ...options) {
        //         app.component(Grid.name, Grid)
        //         app.component(GridColumn.name, GridColumn)
        //         // List Components
        //         app.component(List.name, List)
        //         app.component(ListItem.name, ListItem)
        //         // Flex Components
        //         app.component(Flex.name, Flex)
        //         app.component(FlexRow.name, FlexRow)
        //         app.component(FlexColumn.name, FlexColumn)
        //         // Loader Components
        //         app.component(PulseLoader.name, PulseLoader)
        //         // Form Components
        //         app.component(Form.name, Form)
        //         //app.component(FormTextArea.name, FormTextArea)
        //         app.component(FormTextInput.name, FormTextInput)

        //         app.component(Text.name, Text)
        //         app.component(Header.name, Header)

        //         app.component(Tab.name, Tab)
        //         app.component(TabSelect.name, TabSelect)
        //     }
        // })

        // Provide default styling throughout the application
        app.provide('app-styling', stylingConfig)
        
        if (routingConfig) {
            app.use(createRouter({
                history: createWebHashHistory(),
                routes: routingConfig.routes
            }))
        }

        return app
    }
    return builder = {
        useRouting,
        useTopNavigation,
        useLeftNavigation,
        useRightNavigation,
        useAuthProvider,
        useStyling,
        build
    }
}
export type {
    AppBuilder,
    AppConfig
}
export {
    useAppConfig,
    appBuilder
}