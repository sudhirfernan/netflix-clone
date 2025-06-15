import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero-banner.jpg'
import hero_title from '../../assets/hero-title.jpg'
import play_icon from '../../assets/play-icon.png'
import info_icon from '../../assets/info-icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src= {hero_banner} alt="" className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img'/>
                <p>A lone detective battles inner demons while chasing a ruthless killer through a rain-soaked city. As secrets unravel, he’s forced to confront a past long buried. Trust is shattered, alliances shift, and justice blurs. In the end, truth comes at a deadly cost.</p>
                <div className="hero-btns">
                    <button className='btn'><img src= {play_icon} alt=""/>Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                </div>
               <TitleCards/>
            </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blokbuster Movies"}/>
          <TitleCards title={"Only on Netflix"}/>
          <TitleCards title={"Upcoming"}/>
          <TitleCards title={"Top picks for you"}/>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Home