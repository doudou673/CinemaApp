import React from 'react';
import './Location.css'

function Location(props) {
  const { site ,handleChangeLocation,setClickTab} = props
  const sites = ['全城', '西城区', '东城区', '海淀区', '朝阳区', '丰台区',
    '大兴区', '昌平区', '石景山区', '顺义区', '通州区', '房山区',
    '门头沟区', '怀柔区', '延庆区', '密云区', '平谷区']
  
  return (
    <div className='popup' onClick={()=>setClickTab(-1)}>
      <div className='location-popup' onClick={e=>e.stopPropagation()}>
        <ul className='site-list'>
          {sites.map(item =>
            <li key={item} className='site-item'>
              <div className={`site-item-text ${site === item ? 'select' : ''}`} onClick={()=>handleChangeLocation(item)}>
                {item}
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Location;