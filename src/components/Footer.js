import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../footer.css'
const Footer = () => {
  const [message, setMessage] = useState('');
  // const handleSubmit =(e) => {
  //   const templateId = template_sc4nlry;
  //   const publicId = FvZdWhCFNFTuVTgh1;
  //   const serviceId = service_hlve09u;
  // }
  // const templateParams ={
  //   from_name: name,
  //   to_name: 'web Wizzard',
  //   message: message,
  // }
  return (
    <>
      <footer>
    <div class="footer pt-5">
      <div class="container">
        <div class="row">
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              
              <h4>Home</h4>
              <ul className='ulfooter'>
                <li><Link to="#carouselExampleIndicators">Home</Link></li>
                <li><Link to="#">Events</Link></li>
                <li><Link to="#">Venue</Link></li>
                
              </ul>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4>About</h4>
              <ul className='ulfooter'>
                <li><Link to="#">Technova</Link></li>
                <li><Link to="#">Chief Guests</Link></li>
                
              </ul>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div class="footer_section">
              <h4>Gallery</h4>
              <ul className='ulfooter'>
                <li><Link to="#">Memory</Link></li>
                <li><Link to="#">Highlights</Link></li>
                
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-12 col-lg-3 mb-5">
            <div class="row">
              <div
                class="col-sm-12 col-md-6 col-lg-12 footer_section footer_section_contact"
              >
                <h4>Contact Us</h4>
                <div class="search margin_increase">
                  <form action="#" class="subscribe">
                    <input
                      type="email"
                      class="contact_input"
                      placeholder="E-mail address"
                    />
                    <button type="submit" class="submit_button">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-12 social_media margin_increase">
                <h4>Follow Up</h4>
                <ul className='ulfooter margin_increase'>
                  <li>
                    <Link to=""><i class="fab fa-facebook-f"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-google-plus-g"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-instagram"></i></Link>
                  </li>
                </ul>

              </div>
              
            </div>
            
          </div>
          <div className='bottom_end'>copyright@-Technova2024</div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
