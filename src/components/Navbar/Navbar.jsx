import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import search_icon from '../../assets/search-icon.png'
import bell_icon from '../../assets/bell-icon.png'
import profile_icon from '../../assets/profile-icon.jpeg'
import caret_icon from '../../assets/caret-icon.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign out of netflix</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar