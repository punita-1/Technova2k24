import React from 'react'
import '../SocialIcon.css'

const SocialIcon = () => {
  return (
    <div className='social-icon-wrapper display-flex flex-col'>
      <div className='social-icon-heading'>"Get in Touch With Us" <br /><span>Don’t Miss Out Any Update Of Technova</span></div>
      <div className='social-icon-image-wrapper display-flex'>
        <div><img className='social_icon_size_effect' src='./images/insta1-removebg-preview.png' /></div>
        <div><img className='social_icon_size_effect' src='./images/OIP_fb.jpg' /></div>
        <div><img className='social_icon_size_effect' src='./images/Linkedin-logo-social-network-png-removebg-preview.png' /></div>
        <div><img className='social_icon_size_effect' src='./images/twitterlogo-removebg-preview.png' /></div>
      </div>
    </div>
  )
}

export default SocialIcon
