import React from 'react';
import Gif from "./gif";

export default function ListOfGifs({ gifs }) {

  return <section className='list'>
    {
      gifs.map(({ id, title, url }) => {
        return <Gif
          key={id}
          url={url}
          title={title}
          id={id}
        />
      })
    }
  </section>
}