import { useEffect, useContext } from "react";
import getGifsTrend from "../services/getGifTrend";
import GifsContext from "../context/gifsContext";

export function useTrend() {
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    getGifsTrend()
      .then(gifs => setGifs(gifs));
  }, [setGifs])
  return gifs;
}