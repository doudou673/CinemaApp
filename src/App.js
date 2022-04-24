import React, { useState } from 'react';
import Header from './component/common/Header';
import './App.css'
import Film from './component/film/Film'
import Cinema from './component/cinema/Cinema';
import Center from './component/center/Center'
import FooterItem from './component/common/FooterItem';
import filmIcon from './images/film.png'
import cinemaIcon from './images/cinema.png'
import centerIcon from './images/center.png'
import filmActive from './images/film-active.png'
import cinemaActive from './images/cinema-active.png'
import centerActive from './images/center-active.png'

function App(props) {
  const labelList = [
    {
      id: 0,
      text: '电影',
      icon: filmIcon,
      activeicon: filmActive
    },
    {
      id: 1,
      text: '影院',
      icon: cinemaIcon,
      activeicon: cinemaActive
    },
    {
      id: 2,
      text: '我的',
      icon: centerIcon,
      activeicon: centerActive
    },
  ]

  const [label, setLabel] = useState(0)
  const changeLabel = id => {
    setLabel(id)
  }
  return (
    <div className='wrapper'>
      <Header title={labelList[label].text} />
      <div className='content'>
        {label === 0 && <Film />}
        {label === 1 && <Cinema />}
        {label === 2 && <Center />}
      </div>
      <ul className='nav-bar'>
        {labelList.map(item => <li key={item.id} onClick={() => changeLabel(item.id)}>
          <FooterItem
            img={item.icon}
            text={item.text}
            activeImg={item.activeicon}
            active={label === item.id ? true : false}
          />
        </li>
        )}
      </ul>
    </div>
  );
}

export default App;