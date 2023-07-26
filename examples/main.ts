import { appBuilder } from '../src'
import { routing } from './configuration'
import '../src/index.css'

const builder = appBuilder()
    .useRouting(routing)

const app = builder.build()

app.mount('#app')