import React from "react"
import "focus-visible"
import { render } from "react-dom"
import { Provider } from "react-redux"
import cmfModule from "@talend/react-cmf/lib/cmfModule"
import {
	bootstrapRegistry,
	bootstrapSaga,
	bootstrapRedux
} from "@talend/react-cmf/lib/bootstrap"
import "./index.css"
import { Home } from "./app/Home"

/**
 * Bootstrap your cmf app
 * It takes your configuration and provides a very good default one.
 * By default it starts react with the following addons:
 * - redux
 * - redux-saga
 * @param {object} options the set of supported options
 * @returns {object} app object with render function
 */
export default function bootstrap(appOptions = {}) {
	const options = cmfModule(appOptions)
	bootstrapRegistry(options)
	const appId = options.appId || "app"
	const saga = bootstrapSaga(options)
	const store = bootstrapRedux(options, saga.middleware)

	saga.run()
	render(
		<Provider store={store}>
			<Home />
		</Provider>,
		document.getElementById(appId)
	)
}

bootstrap({
	id: "github-dashboard",
	appId: "root",
	middlewares: [],
	modules: []
})
