import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import New_home from './components/New_home';
// import Home from './components/Home'
import SignUp from './components/SignUp';
import Aboutinside from './components/Aboutinside';
import Gallery_page from './components/Gallery_page';
// import About from './components/About';
import AboutCard from './components/AboutCard'
// import Events from './components/Events';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';
import TeamReg from './components/TeamReg';
import Profile from './components/Profile';
import Venue from './components/venue';
// import Event_try from './components/Event_try';
// import Test from './components/Test';
import Previously from './components/previously';
// import Timer from './components/Timer';
import Events from './components/Events';
import Contactus from './components/Contactus';
import Allevents from './components/AllEvent';
// import Gallery from './components/Gallery';
import SocialIcon from './components/SocialIcon';
// import Test from './components/Test';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          {/* <Route exact path='/AllEvent'> */}
          {/* <Navbar /> */}
          {/* <Allevents /> */}
          {/* </Route> */}
          <Route exact path='/AllEvent'>
            <Navbar />
            <Allevents />
          </Route>
          <Route exact path="/">
            <Navbar />
            <New_home />
            <SocialIcon />
            <AboutCard />
            <Previously />
            <Events />
            <Venue/>
            <Footer/>
            </Route>
          <Route exact path="/Gallery_page">
            <Navbar />
            <Gallery_page />
          </Route>
          <Route exact path="/Aboutinside">
            <Navbar />
            <Aboutinside />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          <Route exact path='/contact'>
            <Navbar />
            <Contactus />
          </Route>
          <Route exact path="/Events">
            <Navbar />
            <Allevents/>
            {/* <Profile /> */}
          </Route>
          <Route exact path="/profile">
            <Navbar />
            <Profile />
          </Route>
          <Route exact path="/EventDetail/:ide">
            <Navbar />
            <EventDetail

            />
          </Route>
          <Route exact path="/TeamReg/:ide">
            <Navbar />
            <TeamReg />
            {/* <Test/> */}
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
