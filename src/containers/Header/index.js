import React, { Component } from 'react'
import Filters from '../Filters'
import './header.css'
import logo from '../../assets/images/logo-demo.png'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='logo image' />
        </div>
        <Filters />
      </div>
    )
  }
}

export default Header
