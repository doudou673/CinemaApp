import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css'
import Arrow from '../../images/arrow.png'

function Detail(props) {
  const [info, setInfo] = useState({})
  const { filmId } = useParams()

  useEffect(() => {
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${filmId}&k=4927054`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1649844263663619691872257","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film);
      setInfo(res.data.data.film)
      // setFilmList1(res.data.data.films)
    })

  }, [filmId])

  return (
    <div className='main'>
      {info.actors && <div className='film'>
        <div className='film-poster'>
          <img src={info.poster} alt='电影海报' />
        </div>
        <div className='film-detail'>
          <div className='film-detail-name' >
            <div>
              <span className='name'>{info.name}</span>
              {info.item && <span className='type'>{info.item.name}</span>}
            </div>
            <div>
              <span className='grade'>{info.grade}</span>
              <span className='text'>分</span>
            </div>
          </div>
          <div className='film-detail-type'>
            <span>{info.category}</span>
            <span>{info.premiereAt}上映</span>
            <span>{info.nation} | {info.runtime}分钟</span>
          </div>
          <div className='film-detail-intro'>
            <div className='intro'>{info.synopsis}</div>
            <div className='arrow'><img src={Arrow} alt=''/></div>
          </div>
        </div>
        <div className='detail-film-actor'>
          <div className='film-actor-title'>演职人员</div>
          <div className='film-actor-list'>
            {info.actors.map(item => <div key={item.name} className='film-actor-list-item'>
              <div className='actor-img'><img src={item.avatarAddress} alt='头像' /></div>
              <span className='actor-name'>{item.name}</span>
              <span className='actor-role'>{item.role}</span>
            </div>)}
          </div>
        </div>
        <div className='film-photo'>
          <div className='film-photo-title'>
            <span className='film-photo-title-text'>剧照</span>
            <span className='film-photo-title-toall'>全部({info.actors.length})</span>
          </div>
          <div className='film-photo-list'>
            {info.photos.map(item => <div key={item} className='film-photo-list-item'>
              <div className='film-photo-list-item-img'><img src={item} alt="剧照" /></div>
            </div>)}
          </div>
        </div>
      </div>}
      <div className='footer'>选座购票</div>
    </div>
  );
}

export default Detail;
// "https://pic.maizuo.com/usr/movie/82cbd1330d86c9976b8b15f50bf187d4.jpg@1246w_1246h_1l_0e"