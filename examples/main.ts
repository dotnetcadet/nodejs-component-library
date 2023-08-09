import { appBuilder } from '../src'
import { routing, styling } from './configuration'
import '../src/index.css'

const builder = appBuilder()
    .useStyling(styling)
    .useRouting(routing)

const app = builder.build()

app.mount('#app')