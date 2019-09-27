import { Article } from "../../types"

export function filterByDomain(filter: string, articles: Article[]) {
	if (!filter) {
		return articles
	}

	return articles.filter(article => {
		if (!!article.domain && article.domain.includes(filter)) {
			return true
		}

		return false
	})
}

export function sortByPoints(a: Article, b: Article) {
	if (a.points == null) {
		return 1
	}
	if (b.points == null) {
		return -1
	}
	return b.points - a.points
}

export function sortByComments(a: Article, b: Article) {
	if (a.comments_count == null) {
		return 1
	}
	if (b.comments_count == null) {
		return -1
	}
	return b.comments_count - a.comments_count
}

export function sortByUser(a: Article, b: Article) {
	return a.user.localeCompare(b.user)
}
