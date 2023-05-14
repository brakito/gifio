import { APIKEY, APIURL, formatSingleGif } from "./settings"

export default function getSingleGif(id) {
  const apiURL = `${APIURL}/gifs/${id}?api_key=${APIKEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(formatSingleGif)
}