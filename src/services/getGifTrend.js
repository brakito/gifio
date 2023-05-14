import formatGifs, { APIKEY, APIURL, PAGELENGTH } from "./settings";

export default function getGifsTrend() {
  const apiURL = `${APIURL}/gifs/trending?api_key=${APIKEY}&limit=${PAGELENGTH}&rating=g`;
  return fetch(apiURL)
    .then(res => res.json())
    .then(formatGifs);
}