import React, { Component } from 'react';
import './App.css'
import Film from './component/Film';
import Cinema from './component/Cinema';
import User from './component/User';

class App extends Component {
  state = {
    tabList: [
      {
        id: 0,
        text: '电影'
      },
      {
        id: 1,
        text: '影院'
      },
      {
        id: 2,
        text: '我的'
      },
    ],
    select: 0
  }

  handelClick = index => {
    this.setState({
      select: index
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='header'>
          影院APP-豆豆
        </div>
        <div className='content'>
          {this.state.select === 0 && <Film></Film>}
          {this.state.select === 1 && <Cinema></Cinema>}
          {this.state.select === 2 && <User></User>}
        </div>
        <ul className='footer'>
          {this.state.tabList.map(
            (item, index) =>
              <li
                key={item.id}
                className={this.state.select === index ? 'active' : ''}
                onClick={() => this.handelClick(index)}
              >
                {item.text}
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;