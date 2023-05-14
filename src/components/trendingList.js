import React, { useState, useEffect } from "react";
import { Link } from 'wouter';
import getTrendTerms from '../services/getTrendTerms';

export default function TrendingList() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    getTrendTerms().then(setTerms);
  }, [])

  return <>{
    terms.map(term => {
      return <Link
        className='trendItem'
        key={term}
        to={`/search/${term}`}>
        {term}
      </Link>
    })
  }</>
}