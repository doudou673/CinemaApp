import React from 'react';
import './Header.css'
import local from '../../images/local.png'
import search from '../../images/search.png'

function Header(props) {
  const { title } = props
  return (
    <div className='header'>
      <div className='left'>
        <span>北京</span>
        <img className='local-img' src={local} alt={''} />
      </div>
      <div className='title'>{title}</div>
      <div className='right'>
        {title === '影院' && <img src={search} alt='搜索' />}
      </div>
    </div>
  );
}

export default Header;