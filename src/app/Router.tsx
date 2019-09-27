import React from "react"
import { Global, css } from "@emotion/core"
import {
	BrowserRouter as ReactRouter,
	Route,
	Switch,
	Redirect
} from "react-router-dom"
import * as system from "reakit-system-bootstrap"
import { Box, Provider as ReakitProvider } from "reakit"
import styled from "@emotion/styled"
import { Articles } from "./components/Articles"

const Content = styled(Box)`
	height: calc(100vh - 70px);
`

export const Router = () => {
	return (
		<ReactRouter>
			<Global
				styles={css`
					* {
						font-family: "Lato", sans-serif;
					}
				`}
			/>
			<ReakitProvider unstable_system={system}>
				<Content>
					<Switch>
						<Route path="/" component={Articles} />
						<Redirect from="/" to="/" exact />
					</Switch>
				</Content>
			</ReakitProvider>
		</ReactRouter>
	)
}
