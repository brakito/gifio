import { APIKEY, APIURL } from "./settings";

function apiResponseToTerms(res) {
  const { data = [] } = res;
	return data;
}

export default function getTrendTerms() {
  const apiURL = `${APIURL}/trending/searches?api_key=${APIKEY}`;

	return fetch(apiURL)
		.then(res => res.json())
		.then(apiResponseToTerms);
}