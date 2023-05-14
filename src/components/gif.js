import React from "react";
import { Link } from "wouter";

function Gif({ url, title, id }) {
  return <Link className="gifCard" to={`/gif/${id}`}>
    <img loading='lazy' alt={title} src={url} />
    <h3>{title}</h3>
  </Link>
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})