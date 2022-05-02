import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './FooterItem.css'

function FooterItem(props) {
  const { item } = props
  let resolved = useResolvedPath(item.router);
  let match = useMatch({ path: resolved.pathname, end: true });
  // console.log(match);
  return (
    <Link to={item.router} className='footer-item'>
      <img src={match ? item.activeicon : item.icon} alt='' />
      <span className={match? 'active' :'false'}>{item.text}</span>
    </Link>
  );
}

export default FooterItem;
// ({isActive})=>isActive ? item.activeicon :
// ({isActive})=>isActive ? 'active' : 