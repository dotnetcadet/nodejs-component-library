import { App, Component } from "vue";
import { FlexColumnConfig, FlexConfig, FlexRowConfig, GridColumnConfig, GridConfig, GridRowConfig } from ".";

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
export type AppTopNavigationConfig = {
    enable: boolean
}
export type AppLeftNavigationConfig = {
    enable: boolean
}
export type AppRightNavigationConfig = {
    enable: boolean
}
export type AppBuilder = {
    useRouting(config: AppRoutingConfig): AppBuilder
    useTopNavigation(config: AppTopNavigationConfig): AppBuilder
    useLeftNavigation(config: AppLeftNavigationConfig): AppBuilder
    useRightNavigation(config: AppRightNavigationConfig): AppBuilder
    useAuthProvider(config: {}): AppBuilder
    useStyling(config: AppStylingConfig): AppBuilder
    build(): App<Element>
}
export type AppAuthResult = {

}
export type AppAuthProvider = {

    login(): Promise<AppAuthResult>
}
/**
 * 
 */
export type AppStylingConfig = {
    flex?: FlexConfig,
    flexRow?: FlexRowConfig
    flexColumn?: FlexColumnConfig
    grid?: GridConfig
    gridRow?: GridRowConfig
    gridColumn?: GridColumnConfig

    form?: {

    },
    formTextInput?: {

    },
    formTextArea?: {

    },
    formDateInput?: {

    },
    formComboBoxInput?: {

    }
}