import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FilmItem.css'

function FilmItem(props) {
  const { film } = props
  const navigate = useNavigate()
  // console.log(film);
  return (
    <div className='film-item' onClick={()=>navigate(`/film/${film.filmId}`)}>
      <img src={film.poster} alt='电影海报' />
      <div className='film-item-text'>
        <div className='film-name'>
          <span className='name'>{film.name}</span>
          <span className='type'>{film.filmType.name}</span>
        </div>
        {film.grade && <div className='film-grade'>
          观众评分 <span>{film.grade}</span>
        </div>}
        <div className='film-actor'>
          主演：{film.actors.map(item => item.name + ' ')}
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