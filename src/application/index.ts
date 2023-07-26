import { createApp, defineComponent, inject, h, provide, ref, Component, PropType } from "vue";
import { RouterView, createRouter, createWebHashHistory } from "vue-router";
import { AppConfig, AppBuilder, AppRoutingConfig } from "./types"
import {
    Grid, GridColumn,
    List, ListItem,
    Flex, FlexRow, FlexColumn,
    Form, FormTextInput,
    PulseLoader,
    FormTextArea

} from "../components";

const injectionKey = 'application-config'


const AppRightBar = defineComponent({
    name: 'AppRightBar'
})

const AppLeftBar = defineComponent({
    name: 'AppLeftBar',
    props: {
        isOpen: {
            type: [Boolean]
        }
    },
    emits: [
        'open'
    ],
    setup(props, { emit }) {





        return () => {

            return h('div', {
                class: `fixed ${props.isOpen === true ? "w-80" : "w-16"} mt-16 h-screen duration-300 flex border-r bg-primary-900 shadow-xl rounded-r-md`
            }, [
                h('nav', {
                    class: 'flex flex-1 flex-col py-4 px-2 overflow-auto'
                }, [
                    h('div', {
                        class: 'flex flex-row-reverse py-2 pr-3'
                    }, [
                        h('div', {
                            class: 'h-10 w-10 bg-black',
                            onClick: () => {
                                emit('open')
                            },
                        })
                    ]),
                    h('ul', {
                        role: 'list',
                        class: 'items-center divide-solid divide-primary-500 divide-y-[1px] w-full'
                    })
                ])
            ])
        }
    },
})
const AppTopbar = defineComponent({

    setup(props, ctx) {
        return () => {
            return h('div', {
                class: 'fixed flex flex-row flex-1 bg-primary-400 border-b border-primary-400 p-3 w-full shadow-md max-h-16  min-h-[5rem]'
            })
        }
    },
})
const App = defineComponent({
    name: 'Application',
    components: {
        RouterView,
        AppLeftBar,
        AppTopbar
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
    let routes: Array<{
        path: string,
        component: any
    }>
    let leftNavComponent: Component

    const useRouting = (config: AppRoutingConfig): AppBuilder => {
        routes = config.routes
        return builder
    }
    const useTopNavigation = (config: {

    }): AppBuilder => {

        return builder
    }
    const useLeftNavigation = (config: {
        component: Component
    }): AppBuilder => {

        leftNavComponent = config.component
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
            leftNavComponent
        })
        app.use({
            install(app, ...options) {
                app.component(Grid.name, Grid)
                app.component(GridColumn.name, GridColumn)
                app.component(List.name, List)
                app.component(ListItem.name, ListItem)
                app.component(Flex.name, Flex)
                app.component(FlexRow.name, FlexRow)
                app.component(FlexColumn.name, FlexColumn)
                app.component(PulseLoader.name, PulseLoader)

                app.component(Form.name, Form)
                app.component(FormTextArea.name, FormTextArea)
            }
        })
        app.use(createRouter({
            history: createWebHashHistory(),
            routes
        }))





        return app
    }
    return builder = {
        useRouting,
        useTopNavigation,
        useLeftNavigation,
        useRightNavigation,
        useAuthProvider,
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