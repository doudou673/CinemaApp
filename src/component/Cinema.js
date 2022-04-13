import React, { Component } from 'react';
import axios from 'axios'
import '../css/Cinema.css'

class Cinema extends Component {
  constructor() {
    super()
    this.state = {
      cinemaList: [],
      startSearch: false,
      searchList: []
    }
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9681514",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615895162724483673423873","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.setState({
        cinemaList: res.data.data.cinemas
      })
    })
    this.handleInput = event => {
      const text = event.target.value
      // console.log(text);
      let results = this.state.cinemaList.filter(item => item.name.indexOf(text) > -1 || item.address.indexOf(text) > -1)
      this.setState({
        startSearch: true,
        searchList: results
      })
    }
    this.handleCancel = () => {
      this.setState({
        startSearch:false
      })
    }
  }

  render() {
    return (
      <div className='cinema'>
        <input onInput={e => this.handleInput(e)} className='searchInput'></input>
        <button onClick={()=>this.handleCancel()} className='searchBtn'>取消</button>
        {!this.state.startSearch && this.state.cinemaList.map(item =>
          <div className='cinema-card' key={item.cinemaId}>
            <div className='cinema-name'>{item.name}</div>
            <div className='cinema-address'>{item.address}</div>
          </div>
        )}
        {this.state.startSearch && this.state.searchList.map(item =>
          <div className='cinema-card' key={item.cinemaId}>
            <div className='cinema-name'>{item.name}</div>
            <div className='cinema-address'>{item.address}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Cinema;