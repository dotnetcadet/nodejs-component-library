import { App, Component } from "vue"

export type AppUser = {

    
}

export type AppConfig = {
    user?: AppUser
}
export type AppRoutingConfig = {
    routes: Array<{
        path: string
        component: Component
    }>
}
export type AppBuilder = {
    useRouting(config: AppRoutingConfig): AppBuilder
    useTopNavigation(config: {

    }): AppBuilder
    useLeftNavigation(config: {
        component: Component
    }): AppBuilder
    useRightNavigation(config: {

    }): AppBuilder
    useAuthProvider(config: {

    }): AppBuilder
    build(): App<Element>
}
export type AppAuthResult = {

}
export type AppAuthProvider = {

    login(): Promise<AppAuthResult>
}