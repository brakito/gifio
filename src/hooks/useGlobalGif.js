import { useContext } from "react";
import GifContext from "../context/gifsContext";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifContext);
  return gifs;
}