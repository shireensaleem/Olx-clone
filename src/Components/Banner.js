import React from 'react'
import './Banner.css'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


function Banner() {
  return (
    <div className='banner-div'>
      <img className='logo-img' src="./IMAGES/OLX-LOGO-PNG.jpg" alt="" />
      <div className='banner-content-div'>
      <form className='location-select'>
        <select>
            <option>India</option>
            <option>Kerala</option>
            <option>Tamil nadu</option>
            <option>Mumbai</option>
            <option>Gurjat</option>
        </select>
      </form>
      <div className='search-div'>
      <input className='banner-input' type="text"  placeholder='Find cars,Mobiles and more'/>
      <div className='search-icon-div'>
      <button className='search-btn'><SearchIcon size="3rem" fontSize='large' color='white' /></button>
      </div>
      </div>
      <form action="search" className='Search-form' >
        <select>
            <option>ENGLISH</option>
            <option>HINDI</option>
            
        </select>
      </form>
      
      <a href='/Home' className='Login'>Login</a>
      <button className='sell-btn'><AddIcon fontSize='small'/><br></br>Sell</button>
      </div>
    </div>
  )
}

export default Banner
