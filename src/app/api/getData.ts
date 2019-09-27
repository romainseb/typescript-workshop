import { ArticleProp } from "../types"

export async function getData(): Promise<ArticleProp[]> {
	const fetchOptions = {
		method: "GET",
		headers: new Headers({
			"Content-type": "application/json"
		})
	}

	var myRequest = new Request("/api/mock-articles", fetchOptions)
	const result = await fetch(myRequest)
	const data = await result.json()
	return data as ArticleProp[]
}
