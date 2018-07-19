import React, { Component } from 'react'
import './infoBox.css'

class InfoBox extends Component {
  render () {
    const infoBoxImg = (
      <div className='info-box-img'>
        <img src={this.props.imgsrc} />
      </div>
    )

    const infoBoxText = (
      <div className='info-box-text'>
        text
      </div>
    )

    if (this.props.index % 2 === 0) {
      return (
        <div className='info-box'>
          {infoBoxImg}
          {infoBoxText}
        </div>
      )
    } else {
      return (
        <div className='info-box'>
          {infoBoxText}
          {infoBoxImg}
        </div>
      )
    }
  }
}

export default InfoBox
