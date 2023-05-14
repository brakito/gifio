import React from "react";
import SearchBar from "../components/searchBar";
import ListOfGifs from "../components/listOfGifs";
import { useTrend } from "../hooks/useTrend";
import TrendingTerms from "../components/trendingCategories";

export default function Home() {
  const trendGifs = useTrend();

  return (
    <section>
      <SearchBar />
      <h3>Tendencias</h3>
      <ListOfGifs gifs={trendGifs} />
      <TrendingTerms />
    </section>
  )
}