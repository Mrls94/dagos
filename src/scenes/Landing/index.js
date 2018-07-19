import React, { Component } from 'react'
import Header from '../../containers/Header'
import Carousel from '../../containers/Carousel'
import InfoBox from '../../containers/InfoBox'
import logo from '../../logo.svg'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imagesCarousel: [
        { src: 'https://www.jbprideuniforms.com/images/school-uniforms-2-hero.jpg' },
        { src: 'https://www.nzuniforms.com/userfiles/2016/slides/XMAS/MED_XL_B.png' }
      ],
      infoBoxes: [
        { text: 'Hello text 1', src: 'https://www.jbprideuniforms.com/images/school-uniforms-2-hero.jpg' },
        { text: 'Hello text 2', src: 'https://www.nzuniforms.com/userfiles/2016/slides/XMAS/MED_XL_B.png' }
      ]
    }
  }
  render () {
    const infoBoxList = this.state.infoBoxes.map((obj, index) =>
      <InfoBox index={index} imgsrc={obj.src} infotext={obj.text} />
    )

    return (
      <div>
        <Header />
        <Carousel images={this.state.imagesCarousel} />
        {infoBoxList}
        {/* <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React  HEllO LAURA 22222</h1>
          </header>
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div> */}
      </div>
    )
  }
}

export default Landing
