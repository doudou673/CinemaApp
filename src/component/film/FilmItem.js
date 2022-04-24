import React from 'react';
import './FilmItem.css'

function FilmItem(props) {
  const { film } = props
  console.log(film);
  return (
    <div className='film-item'>
      <img src={film.poster} alt='电影海报'/>
      <div className='film-item-text'>
        <div className='film-name'>
          <span className='name'>{film.name}</span>
          <span className='type'>{film.filmType.name}</span>
        </div>
        <div className='film-grade'>
          观众评分 <span>{film.grade}</span>
        </div>
        <div className='film-actor'>
          主演：{film.actors[0].name}
        </div>
        <div className='film-type'>
          {film.nation} | {film.runtime}分钟
        </div>
      </div>
      <button>购票</button>
    </div>
  );
}

export default FilmItem;