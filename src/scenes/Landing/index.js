import React, { Component } from 'react'
import Header from '../../containers/Header'
import logo from '../../logo.svg'

class Landing extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React  HEllO LAURA 22222</h1>
          </header>
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    )
  }
}

export default Landing
