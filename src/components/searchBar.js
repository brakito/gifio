import React, { useState } from "react";
import { Link, useLocation } from "wouter";

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleChange = event => {
    setKeyword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  }

  return (
    <div className="heroSearch">
      <Link to="/"><h1 className='Title'>GIFIO</h1></Link>
      <form className="searchBar" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={keyword} placeholder='Search a gif here...' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default React.memo(SearchBar);