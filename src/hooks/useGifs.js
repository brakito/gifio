import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/gifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
  }, [keywordToUse, keyword, setGifs])

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setLoadingNextPage(true);
      getGifs({keyword: keywordToUse, page: page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs)); // asi funciona como un ver mas xd
          // setGifs(nextGifs); // asi pasa ala siguiente pagina, dejando atras la anterior
          setLoadingNextPage(false);
        })
    } else setPage(0);
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
}