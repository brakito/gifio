import { useGifs } from "./useGifs";
import getSingleGif from "../services/getSingleGif";
import { useEffect, useState } from "react";

export function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id);
  const [gif, setGif] = useState(gifFromCache)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setLoading(true)
      getSingleGif(id).then(res => {
        setGif(res)
        setLoading(false)
        setError(false)
      }).catch(err => {
        setLoading(false)
        setError(true)
      })
    }
  }, [gif, id])

  return { gif, loading, error }
}