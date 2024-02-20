import React from 'react'
import '../About.css'

const Aboutinside = () => {
  return (
    <>
      <div className='about-wrapper'>


        <div className='about_what'>
          <h1>What is Technova?</h1>
          <div className="container">
            <div className="rectangle"></div>
          </div>
        </div>
        <div className='about_content'>
        <img src='../images/technovalogo.png'></img>
          <p className='paragraph'>
            <b>Technova</b> is the technical fest of <b>DCRUST</b>. It's a celebration of innovation and technology that offers a dynamic
            and forward-thinking approach toward advancements in various fields, including science, engineering, and entrepreneurship.
            <br />
            <br />
            The fest includes various activities, such as events, workshops, and exhibitions, aimed at showcasing cutting-edge
            technologies, fostering creativity, and promoting collaboration among professionals, researchers, students, and enthusiasts.
            Technova events provide a platform for knowledge sharing, networking, and inspiration, driving progress and shaping the
            future of technology and innovation. With over <b>50+ events</b>, including up to three categories for every event, team
            Technova ensures something fun for everyone to enjoy.
            <br />
            <br />
            Technova's impact extends far beyond the fest itself, driving progress and shaping the future of technology and innovation.
            Technova is an innovative approach that will continue to inspire and motivate people from different fields to collaborate
            and create something extraordinary.
          </p>
         
        </div>

        <div className='why'>
          <h1>Why it is so Important?</h1>
          <div className="container">
            <div className="rectangle"></div>
          </div>
        </div>
        <div className='about_why'>
          <div className='why_card'>
            <h3>Promoting Innovation:</h3>
            <p className='show_description'>
              Technova events provide a platform for showcasing innovative technologies, products, and ideas, fostering creativity and pushing the
              boundaries of what's possible.
            </p>

          </div>
          <div className='why_card'>
            <h3>Skill Development:</h3>
            <p className='show_description'>
              It offers opportunities for participants to enhance their technical skills through workshops, seminars, and hands-on experiences, preparing them for future challenges in the rapidly evolving technological landscape.
            </p>

          </div>
          <div className='why_card'>
            <h3>Knowledge Sharing:</h3>
            <p className='show_description'>
              Technova events often include workshops, seminars, and talks where experts share insights and expertise, allowing participants to learn
              from each other and stay updated on the latest trends and developments.
            </p>

          </div>
        </div>
        <div className='about_whys'>
          <div className='why_card'>
            <h3>Socializing platforms:</h3>
            <p className='show_description'>
              Technova events bring together professionals, students, researchers, and enthusiasts from diverse backgrounds, facilitating networking
              and collaboration that can lead to new partnerships and opportunities.
            </p>

          </div>
          <div className='why_card'>
            <h3>Inspiration:</h3>
            <p className='show_description'>
              Technova events inspire attendees to pursue careers in STEM (Science, Technology, Engineering, and Mathematics) fields by showcasing
              the exciting possibilities and real-world applications of technology.
            </p>

          </div>

        </div>
      </div>




    </>
  )
}

export default Aboutinside