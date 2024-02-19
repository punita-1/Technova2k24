import React from 'react'
import Timer from './Timer'
import '../Home.css'

const new_home = () => {
    return (
        <div className="home_wrapper">
            <div className="home_content">
                <div className='home_heading'>Technova 2024</div>
                <div className='home_date'>"12th March - 14th March"</div>
                <div className='home_timer'><Timer/></div>
                <div className='home_subheading'>"Ignite Your Passion for Innovation:Join Us for a Spectacular Fusion of Technology and Talent!" </div>
            </div>
            <div className="home_image">
                <img src='\images\Home_robot.png' alt="Home Robot"></img>
            </div>
        </div>
    )
}

export default new_home