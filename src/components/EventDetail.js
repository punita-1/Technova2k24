import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { data } from '../Data';
import '../EventDetail.css'

import { useStore } from '../store';
// import imager from eventImage;
// import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap'
const EventDetail = () => {
  const { ide } = useParams();
  const history = useHistory();
  const { id, eventName, eventImage, eventDescription, rules } = data[ide];
  // console.log(eventDescription);
  console.log(eventImage);
  const currentName = useStore((state) => state.currentName);
  const { setCurrentName } = useStore();
  // let listing = document.querySelector('.rules45');
  // // listing.innerHTML = rules;
  function checker(e, ide) {
    e.preventDefault();
    if (currentName.length <= 0) {

      history.push("/signup")
    }
    else {
      history.push(`/TeamReg/${ide}`)
    }

  }

  // console.log(ide)
  return (
    <div className='body45'>
      <div class="innercontainer">
        <section class="about45">
          <div class="banner45"><img src={eventImage} alt="Event image"></img></div>
          <div class="description45" id="desc">
            <h1 id="desgh">{eventName}</h1> <br /><br />
            <p >{eventDescription}</p>

            {

              <Link to={`/TeamReg/${ide}`}><button class="regis fourth" onClick={(e) => { checker(e, ide) }}>Registor Now</button></Link>
            }
          </div>

        </section>
        <br />
        <div ><h1 class="heading45">EVENT RULES</h1></div>

        <div class="rules45" dangerouslySetInnerHTML={{ __html: rules }} style={{ listStyleType: "disc" }}>



        </div>


      </div>
    </div>


  )
}

export default EventDetail