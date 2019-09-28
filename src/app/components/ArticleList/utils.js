export function filterByDomain(filter, articles) {
	if (!filter) {
		return articles
	}

	return articles.filter(article => {
		if (article.domain.includes(filter)) {
			return true
		}

		return false
	})
}

export function sortByPoints(a, b) {
	return b.points - a.points
}

export function sortByComments(a, b) {
	return b.comments_count - a.comments_count
}

export function sortByUser(a, b) {
	return a.user.localeCompare(b.user)
}
