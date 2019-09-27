type ArticleType = "link" | "ask"

enum EnumArticleType {
	link = "link",
	ask = "ask"
}

export type UnknownNumber = number | null | undefined

export type ArticleProp = {
	id: number
	title: string
	points: UnknownNumber
	user: string
	time: number
	time_ago: string
	comments_count: UnknownNumber
	type: EnumArticleType
	url: string
	domain?: string
}
