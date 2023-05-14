import formatGifs, { APIKEY, APIURL, PAGELENGTH } from "./settings";

export default function getGifs({ keyword = 'random', page = 0 } = {}) {
	const skipGifs = page * PAGELENGTH;
	const apiURL = `${APIURL}/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=${PAGELENGTH}&offset=${skipGifs}&rating=g&lang=en`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(formatGifs);
}