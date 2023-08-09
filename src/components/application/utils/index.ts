import { inject } from "vue";
import { AppStylingConfig } from "../types";


export const useStylingConfig = (): AppStylingConfig => {
    return inject<AppStylingConfig>('app-styling') as AppStylingConfig
}