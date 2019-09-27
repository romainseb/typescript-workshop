import React, { useState } from "react"
import styled from "@emotion/styled"
import { useAsyncEffect } from "../../../tools"
import { getData } from "../../api/getData"
import { ArticleItem } from "../ArticleItem"
import { Article } from "../../types"
import { Header } from "./Header"
import { SortBy } from "../SortBy"
import { sortByPoints, sortByUser, sortByComments } from "./utils"

const filterDictionary: {
	[index: string]: (a: Article, b: Article) => number
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

export const ArticleList = () => {
	const [articles, setArticles] = useState<Article[]>([])
	const [sort, setSort] = useState<keyof Article>("points")

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
				<ArticleItem key={article.id} article={article} />
			))}
		</>
	)
}
