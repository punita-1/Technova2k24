import React from 'react'
// import mapImage from './map-image.jpg'
import '../venue.css'// Replace with the path to your map image

function Venue() {
  return (
    <div className="venue-container">
      <div className="venue-text">
        <h1>Venue</h1>
        <p>"Deenbandhu Chhotu Ram University of Science & Technology is conveniently located in Murthal, Sonepat, Haryana, with the address: Murthal, Sonepat, Haryana - 131039. You can easily reach us by road via well-connected highways, or by public transport options such as buses or trains. For more detailed directions, please refer to the map below or contact us for assistance."</p>
      </div>
      <div className="venue-map">
      <div className="venue-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.6546524441715!2d77.05953287537352!3d29.027212275451493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db10377463789%3A0xf697cc2d804b8b8e!2sDeenbandhu%20Chhotu%20Ram%20University%20Of%20Science%20And%20Technology%2C%20Murthal%20Sonipat%20(Haryana)!5e0!3m2!1sen!2sin!4v1708432663999!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
  )
}

export default Venue