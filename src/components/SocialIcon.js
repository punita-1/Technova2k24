import React from 'react'
import '../SocialIcon.css'

const SocialIcon = () => {
  return (
    <div className='social-icon-wrapper display-flex flex-col'>
      <div className='social-icon-heading'>"Get in Touch With Us" <br/><span>Don’t Miss Out Any Update Of Technova</span></div>
      <div className='social-icon-image-wrapper display-flex'>
        <div><img src='./images/instagram.png'/></div>
        <div><img src='./images/facebook.png'/></div>
        <div><img src='./images/linkedin.png'/></div>
        <div><img src='./images/twitter.png'/></div>
      </div>
    </div>
  )
}

export default SocialIcon
