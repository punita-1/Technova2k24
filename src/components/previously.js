import React from 'react'
import CarouselComponent from './Carousel'
import '../previously.css'

function Previously() {
  return (
    <div className='previouly-section-wrapper'>
      <div className="previously-section" data-animate-on-scroll>
          <div className="home_heading previously">"Moments in Time"</div>
          <div className="explore-the-past">
            "Explore the past triumphs and memorable moments that have shaped
            the legacy of our university's innovative spirit."
          </div>
          {/* <div className="request-early-access">
            Request Early Access to Get Started
          </div> */}
          <a href='/' className="visit-gallary-button ">
            <div className="visit-gallary-button-child" />
            <b className="visit-gallery3">
              <p className="ignite-your-passion">Visit Gallery</p>
            </b>
          </a>
          </div>
          
          <CarouselComponent first="./images/301.jpeg" second="./images/301.jpeg" third="./images/301.jpeg"/>
    </div>
  )
}

export default Previously
