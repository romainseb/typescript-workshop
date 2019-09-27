import * as Router from "koa-router"
import { getMockArticles } from "./api-mock-articles"

export const router = new Router()

router.get("/api/articles", async ctx => {
	ctx.body = "To implement"
})

router.get("/api/mock-articles", getMockArticles)

router.get("/*", async ctx => {
	ctx.body = "Hello World!"
})
