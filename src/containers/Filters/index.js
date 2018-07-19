import React, { Component } from 'react'
import Search from '../Search'
import Navigator from '../Navigator'
import './filters.css'

class Filters extends Component {
  render () {
    return (
      <div className='filters'>
        <Search />
        <Navigator />
      </div>
    )
  }
}

export default Filters
