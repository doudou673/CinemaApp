import React from 'react';
import './CinemaItem.css'

function CinemaItem(props) {
  const { cinema } = props
  // console.log(cinema);
  return (
    <div className='cinema-item'>
      <div className='cinema-item-name'>
        <span className='cinema-name'>{cinema.name}</span>
        <span className='cinema-address'>{cinema.address}</span>
      </div>
      <div className='cinema-item-price'>
        <span className='cinema-price'>￥<span>{cinema.lowPrice/100}</span>起</span>
        <span className='cinema-gps'>距离未知</span>
      </div>
    </div>
  );
}

export default CinemaItem;