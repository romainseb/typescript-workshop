import * as Koa from "koa"
import * as bodyParser from "koa-bodyparser"

import { router } from "./routes"

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())

app.listen(4000)

console.log("Server running on port 4000")
