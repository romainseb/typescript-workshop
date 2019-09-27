import React from "react"
import * as system from "reakit-system-bootstrap"
import { Provider as ReakitProvider } from "reakit"
import { ArticleList } from "./components/ArticleList"

export const Home = () => {
	return (
		<ReakitProvider unstable_system={system}>
			<ArticleList />
		</ReakitProvider>
	)
}
