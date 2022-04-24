import React from 'react';
import './FooterItem.css'

function FooterItem(props) {
  const { img, text, activeImg, active } = props
  return (
    <div className='footer-item'>
      <img src={active ? activeImg :img} alt={text} />
      <span className={active ? 'active' : ''}>{text}</span>
    </div>
  );
}

export default FooterItem;