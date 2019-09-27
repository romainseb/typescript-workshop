import React, { useState } from "react"
import styled from "@emotion/styled"
import { useAsyncEffect } from "../../../tools"
import { getData } from "../../api/getData"
import { Article } from "../Article"
import { ArticleProp } from "../../types"
import { Header } from "../Header"
import { SortBy } from "../SortBy"
import { sortByPoints, sortByUser, sortByComments } from "./utils"

const filterDictionary: {
	[index: string]: (a: ArticleProp, b: ArticleProp) => number
} = {
	points: sortByPoints,
	user: sortByUser,
	comments_count: sortByComments
}

const ResultLabel = styled.div`
	padding: 10px 30px;
	color: #989898;
	font-size: 18px;
`

export const Articles = () => {
	const [articles, setArticles] = useState<ArticleProp[]>([])
	const [sort, setSort] = useState<keyof ArticleProp>("points")

	const currentSort = filterDictionary[sort]

	useAsyncEffect(async () => {
		const data = await getData()
		setArticles(data)
	}, [])

	return (
		<>
			<Header />
			<SortBy sort={sort} setSort={setSort}></SortBy>
			<ResultLabel>Results :</ResultLabel>
			{articles.sort(currentSort).map(article => (
				<Article key={article.id} article={article} />
			))}
		</>
	)
}
