import React, { Component } from 'react'
import Slider from 'react-slick'
import './carousel.css'

class Carousel extends Component {
  render () {
    var settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true
    }

    const imgList = this.props.images.map((obj) =>
      <div className='carousel-img'>
        <img src={obj.src} />
      </div>
    )

    return (
      <div className='carousel'>
        <Slider className='slider' {...settings}>
          {imgList}
        </Slider>
      </div>
    )
  }
}

export default Carousel
