import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useStore } from '../store'
import { Dropdown } from 'rsuite';
import $ from 'jquery';
import '../Navbar.css'
import 'rsuite/dist/rsuite.min.css';
const Navbar1 = () => {
  // const currentName = useStore((state) => state.currentName);
  // const { setCurrentName, setCurrentEmail } = useStore();
  const location = useLocation();
  console.log(location.pathname)
  const refer = useRef(null);
  const referburger = useRef(null);
  let url = window.location.href;
  window.addEventListener('scroll', fixNav)
  function fixNav() {
    if (window.scrollY > 150) {
      refer.current.classList.add('active1');
      referburger.current.classList.remove('navbar-dark');
      referburger.current.classList.add('navbar-light');
    } else {
      refer.current.classList.remove('active1');
      referburger.current.classList.remove('navbar-light');
      referburger.current.classList.add('navbar-dark');
    }
  }

  useEffect(() => {
    if (location.pathname == '/' || location.pathname == '/contact') {
      refer.current.classList.remove('navbg');
      refer.current.classList.add('navbg1');

    }
    else {
      refer.current.classList.remove('navbg1');
      refer.current.classList.add('navbg');
    }


  }, [location])
  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props} >
      <Link to='/profile'><Dropdown.Item >View Profile</Dropdown.Item></Link>

      <Link to='/'><Dropdown.Item onClick={() => { console.log("triggerred") }}>Signout</Dropdown.Item></Link>

    </Dropdown>
  );



  return (
    <header>

      <nav className="d-block navnew navbar navbar-expand-lg w-100w" ref={refer}>
        <div class="containernew row ">

          <h3 class="logo me-auto col"><Link to="/">Technova24</Link></h3>

          <button class="ms-auto navbar-toggler w-auto" align="right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ref={referburger}></span>
          </button>
          <div class="ms-auto collapse navbar-collapse w-auto" id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto  my-auto p-0'>
              <li className='nav-item'><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
              <li className='nav-item'><NavLink to="/Aboutinside" activeClassName="active" exact>About</NavLink></li>
              <li className='nav-item'><NavLink to="/AllEvent" activeClassName="active" exact>Events</NavLink></li>
              <li className='nav-item'><a href="#gallery" className={url.includes('/#gallery') ? 'active' : ''}>Gallery</a>
              </li>
              <li className='nav-item'><NavLink to="/contact" activeClassName="active" exact>Contact</NavLink></li>

              {

                ("" === '') ?
                  <li><Link to="/signup" ><button class="btn8  text-light">Sign Up</button></Link></li>

                  :
                  <CustomDropdown title={""} trigger={['click', 'hover']} />


              }
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar1