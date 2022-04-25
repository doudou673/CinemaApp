import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cinema.css'
import tabIcon from '../../images/local.png'
import CinemaItem from './CinemaItem';

function Cinema() {
  const [cinemaList, setCinemaList] = useState([])
  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9681514",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615895162724483673423873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res.data)
      setCinemaList(res.data.data.cinemas)
    })
  }, [])
  return (
    <div className='cinema'>
      <div className='cinema-list-tag'>
        <label>
          全城
          <img src={tabIcon} alt="" />
        </label>
        <label>
          APP订票
          <img src={tabIcon} alt="" />
        </label>
        <label>
          最近去过
          <img src={tabIcon} alt="" />
        </label>
      </div>
      <ul className='cinema-list'>
        {cinemaList.map(item => <li key={item.cinemaId}>
          <CinemaItem cinema={item}/>
        </li>)}
      </ul>
    </div>
  );
}

export default Cinema;