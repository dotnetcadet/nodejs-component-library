import { AppRoutingConfig } from "../../../src/application/types";
import About from "../../views/About.vue"

export const routing: AppRoutingConfig = {
    routes: [
        {
            path: '/', 
            component: About
        }
    ]
}