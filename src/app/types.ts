type ArticleType = "link" | "ask"

export type MaybeNumber = number | null | undefined

export type Article = {
	id: number
	title: string
	points: MaybeNumber
	user: string
	time: number
	time_ago: string
	comments_count?: number
	type: ArticleType
	url: string
	domain?: string
}
