import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='navbar'>
     <div className="navbar-left">
        <img src="https://about.netflix.com/images/meta/netflix-symbol-black.png" alt="" style={{width:'90px'}}/>
        <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
     </div>
     <div className="navbar-right">
     <FontAwesomeIcon icon={faMagnifyingGlass} className='icons'/>
     <p>Children</p>
     <FontAwesomeIcon icon={faBell} style={{color: "#FFD43B",}} className='icons'/>
     <div className="navbar-profile">
    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="" style={{width:'25px'}} className='profile'/>
     <FontAwesomeIcon icon={faCaretDown} style={{color: "#FFD43B",}} />
     <div className="dropdown">
        <p>sign out</p>
     </div>
     </div>

     </div>
    </div>
  )
}

export default Navbar
