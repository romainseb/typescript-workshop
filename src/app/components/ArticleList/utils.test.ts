import { filterByDomain } from "./utils"
import { Article } from "../../types"

const articles: Article[] = [
	{
		id: 20949974,
		title:
			"The beauty of functional languages in deep learning – Clojure and Haskell",
		points: 182,
		user: "wickwavy",
		time: 1568285056,
		time_ago: "4 hours ago",
		comments_count: 63,
		type: "link",
		url:
			"https://www.welcometothejungle.co/fr/articles/btc-deep-learning-clojure-haskell"
	},
	{
		id: 20951580,
		title: "Two Browsers Walked into a Scrollbar",
		points: 22,
		user: "robin_reala",
		time: 1568297276,
		time_ago: "an hour ago",
		comments_count: 4,
		type: "link",
		url: "https://www.filamentgroup.com/lab/scrollbars/",
		domain: "filamentgroup.com"
	},
	{
		id: 20951573,
		title: "College, Calculus, and the Problem with the SAT",
		points: 23,
		user: "kaboro",
		time: 1568297241,
		time_ago: "an hour ago",
		comments_count: 13,
		type: "link",
		url: "https://www.wired.com/story/college-calculus-problem-with-the-sat/",
		domain: "wired.com"
	}
]

describe("filterByDomain", () => {
	it("should filter nothing with an empty string", () => {
		// given
		const filter = ""
		// when
		const result = filterByDomain(filter, articles)
		// then
		expect(result.length).toBe(3)
	})

	it("should filter elements that have com in their domain", () => {
		// given
		const filter = "com"
		// when
		const result = filterByDomain(filter, articles)
		// then
		expect(result.length).toBe(2)
	})
})
