import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
// import SignUp from './components/SignUp';
import About from './components/About';
// import About from './components/About';
import Aboutcard from './components/Aboutcard'
// import Events from './components/Events';
// import Footer from './components/Footer';
// import EventDetail from './components/EventDetail';
// import TeamReg from './components/TeamReg';
// import Profile from './components/Profile';
// import Test from './components/Test';
// import Previously from './components/previously';
import Timer from './components/Timer';
// import Contactus from './components/Contactus';
// import Allevents from './components/AllEvent';
// import Gallery from './components/Gallery';
import SocialIcon from './components/SocialIcon';
// import Test from './components/Test';

const App = () => {
  return (
    <>
      <Router>

        <Routes>
          {/* <Route exact path='/AllEvent'> */}
            {/* <Navbar /> */}
            {/* <Allevents /> */}
          {/* </Route> */}
          <Route exact path="/">
            <Navbar />
            <Home />
            <Timer />
            <SocialIcon />
            <Aboutcard />
            {/* <Previously /> */}
            {/* <About /> */}
            {/* <Events /> */}
          </Route>
          <Route exact path="/About">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/signup">
            <Navbar />
            {/* <SignUp /> */}
          </Route>
          <Route exact path='/contact'>
            <Navbar />
            {/* <Contactus /> */}
          </Route>
          <Route exact path="/profile">
            <Navbar />
            {/* <Profile /> */}
          </Route>
          <Route exact path="/EventDetail/:ide">
            <Navbar />
            {/* <EventDetail/> */}
          </Route>
          {/* <Route exact path="/TeamReg/:ide"> */}
          {/* <TeamReg /> */}
          {/* <Test/> */}
          {/* </Route> */}
        </Routes>

      </Router>
    </>
  )
}

export default App
