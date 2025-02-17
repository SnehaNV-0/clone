import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar'


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="movie">
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/17165.jpg" alt="" className='movie-img'/>
        <div className='movie-info'>
          <div className="movie-btn">
            <button className='btn'><img src="https://i.pinimg.com/736x/54/a9/76/54a9766fc75926c2adcd3181afe26db1.jpg" alt=""/>Play</button>
            <button className='btn dark-btn'><img src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-information-icon-png-image_925431.jpg" alt="" />More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
