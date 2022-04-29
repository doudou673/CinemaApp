import React from 'react';
import selectedImg from '../../images/selected.png'
import './TabPopup.css'

function TabPopup(props) {
  const { selects, handleChangeSelect, selected, setClickTab } = props
  return (
    <div className='popup' onClick={() => setClickTab(-1)}>
      <div className='select-popup' onClick={e => e.stopPropagation()}>
        <ul className='select-list'>
          {selects.map(item =>
            <li
              key={item}
              className={`select-list-item ${selected === item ? 'selected' : ''}`}
              onClick={() => handleChangeSelect(item)}
            >
              {selected === item ? <img src={selectedImg} alt='' /> : <span className='placehold'></span>}
              <span className='select-list-item-text'>{item}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TabPopup;