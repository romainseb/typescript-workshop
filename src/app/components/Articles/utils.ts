import { ArticleProp } from "../../types"

export function sortByPoints(a: ArticleProp, b: ArticleProp) {
	if (a.points == null) {
		return 1
	}
	if (b.points == null) {
		return -1
	}
	return b.points - a.points
}

export function sortByComments(a: ArticleProp, b: ArticleProp) {
	if (a.comments_count == null) {
		return 1
	}
	if (b.comments_count == null) {
		return -1
	}
	return b.comments_count - a.comments_count
}

export function sortByUser(a: ArticleProp, b: ArticleProp) {
	return a.user.localeCompare(b.user)
}
