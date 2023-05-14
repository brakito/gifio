import React, { useCallback, useEffect, useRef } from 'react';
import ListOfGifs from '../components/listOfGifs';
import { useGifs } from '../hooks/useGifs';
import Spinner from '../components/spinner';
import { useNearScreen } from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import SearchBar from '../components/searchBar';

export default function Search(props) {
  const { keyword } = props.params; // Los params, encpsulan las propiedades de la url, cosa de wouter
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef()
  const { isNear } = useNearScreen({
    distance: '300px',
    externalRef: loading ? false : externalRef,
    once: false
  })

  // const handlePreviusPage = () => setPage(prevPage => prevPage - 1);
  // const handleNextPage = () => console.log('next page')

  // useCallback lo que hace es evitar que el renderizado genere la misma funcion
  // en este caso debounce no puede perder la referencia que tiene por eso usamos useCallbak
  const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 300), [setPage])

  useEffect(() => {
    if (isNear) debounceHandleNextPage()
  }, [isNear, debounceHandleNextPage])

  return loading
    ? <Spinner />
    : <div>
      <SearchBar />
      <h3>Gifs de {decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
      <div id="visor" ref={externalRef}></div>
    </div>
}