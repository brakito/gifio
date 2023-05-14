import React, { useEffect } from "react";
import Gif from "../components/gif";
import { useSingleGif } from "../hooks/useSingleGif";
import Spinner from "../components/spinner"
import { Redirect } from "wouter";
import SearchBar from "../components/searchBar";
import { useTitle } from "../hooks/useSEO";

export default function Detail({ params }) {
  const { gif, loading, error } = useSingleGif({ id: params.id })
  useTitle({ title: gif.title })

  if (error) return <Redirect to="/404" />
  if (loading) return <Spinner />
  return <>
    <SearchBar />
    <Gif {...gif} />
  </>
}