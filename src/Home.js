import React from 'react';
import './Home.css'
import FooterItem from './component/common/FooterItem';
import filmIcon from './images/film.png'
import cinemaIcon from './images/cinema.png'
import centerIcon from './images/center.png'
import filmActive from './images/film-active.png'
import cinemaActive from './images/cinema-active.png'
import centerActive from './images/center-active.png'
import { Outlet} from 'react-router-dom';

function Home(props) {
  const labelList = [
    {
      id: 0,
      text: '电影',
      router: 'films',
      icon: filmIcon,
      activeicon: filmActive
    },
    {
      id: 1,
      text: '影院',
      router: 'cinemas',
      icon: cinemaIcon,
      activeicon: cinemaActive
    },
    {
      id: 2,
      text: '我的',
      router: 'center',
      icon: centerIcon,
      activeicon: centerActive
    },
  ]

  return (
    <div className='wrapper'>
      <div className='content'>
        <Outlet />
      </div>
      <ul className='nav-bar'>
        {labelList.map(item => <li key={item.id}>
          <FooterItem item={item} />
        </li>
        )}
      </ul>
    </div>
  );
}

export default Home;