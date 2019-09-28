import React, { useState } from "react"
import styled from "@emotion/styled"
import { useAsyncEffect } from "../../../tools"
import { getData } from "../../api/getData"
import { ArticleItem } from "../ArticleItem"
import { Header } from "./Header"
import { SortBy } from "../SortBy"
import { sortByPoints, sortByUser, sortByComments } from "./utils"

const filterDictionary = {
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
	const [articles, setArticles] = useState([])
	const [sort, setSort] = useState("points")

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
