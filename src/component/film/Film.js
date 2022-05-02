import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmItem from './FilmItem';
import Header from '../common/Header';
import './Film.css'

function Film() {
  const [filmList1, setFilmList1] = useState([])
  const [filmList2, setFilmList2] = useState([])
  const [tab, setTab] = useState(0)
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=304011",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649844263663619691872257","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data);
      setFilmList1(res.data.data.films)
    })
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7000004",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649844263663619691872257","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setFilmList2(res.data.data.films)
    })
  }, [])
  return (
    <div className='film'>
      <Header title='电影' />
      <ul className='tab'>
        <li onClick={() => setTab(0)}><div className={tab === 0 ? 'active' : 'false'}>正在热映</div></li>
        <li onClick={() => setTab(1)}><div className={tab === 1 ? 'active' : 'false'}>即将上映</div></li>
      </ul>
      <ul className='film-list'>
        {tab === 0 ?
          filmList1.map(item => <li key={item.filmId}><FilmItem film={item} /></li>)
          : filmList2.map(item => <li key={item.filmId}><FilmItem film={item} /></li>)}
      </ul>
        <div className='no-more'>- 无更多电影 -</div>
    </div>
  );
}

export default Film;