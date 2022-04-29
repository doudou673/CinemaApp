import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cinema.css'
import tabIcon from '../../images/local.png'
import tabClickIcon from '../../images/tab-click.png'
import CinemaItem from './CinemaItem';
import Location from './Location';
import TabPopup from './TabPopup';

function Cinema() {
  const [cinemaList, setCinemaList] = useState([])
  const [location, setLocation] = useState('全城')
  const [way, setWay] = useState('APP订票')
  const [like, setLike] = useState('最近去过')
  const [clickTab, setClickTab] = useState(-1)

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

  const handleChangeLocation = location => {
    setLocation(location)
    setClickTab(-1)
  }

  const ways = ['APP订票', '前台兑换']
  const likes = ['最近去过', '离我最近']

  const handleChangeWay = value => {
    setWay(value)
    setClickTab(-1)
  }

  const handleChangeLike = value => {
    setLike(value)
    setClickTab(-1)
  }

  const tabContent = (text, index) => {
    return (
      <label
        onClick={() => { clickTab === index ? setClickTab(-1) : setClickTab(index) }}
        className={clickTab === index ? 'active' : 'false'}
        key={index}
      >
        {text}
        <img src={clickTab === index ? tabClickIcon : tabIcon} alt="" />
      </label>
    )
  }
  return (
    <div className='cinema'>
      <div className='cinema-list-tag'>
        {[location, way, like].map((item, index) => tabContent(item, index))}
      </div>
      <ul className='cinema-list'>
        {cinemaList.map(item => <li key={item.cinemaId}>
          <CinemaItem cinema={item} />
        </li>)}
      </ul>
      {clickTab === 0 &&
        <Location
          site={location}
          handleChangeLocation={handleChangeLocation}
          setClickTab={setClickTab}
        />}
      {clickTab === 1 &&
        <TabPopup
          selects={ways}
          selected={way}
          handleChangeSelect={handleChangeWay}
          setClickTab={setClickTab}
        />}
      {clickTab === 2 &&
        <TabPopup
          selects={likes}
          selected={like}
          handleChangeSelect={handleChangeLike}
          setClickTab={setClickTab}
        />}
    </div>
  );
}

export default Cinema;