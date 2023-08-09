import { inject } from "vue";
import { AppStylingConfig } from "../types/application";

export const useStylingConfig = (): AppStylingConfig => inject<AppStylingConfig>('app-styling') as AppStylingConfig