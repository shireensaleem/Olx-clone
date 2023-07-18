import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Footer() {
  return (
    
    <div className='footer-div'>

        <ul className='first-list'>
            <li><strong>Popular Locations</strong></li>
            <li>Mumbai</li>
            <li>Maharashtra</li>
            <li>Chennai</li>
            <li>Kolkata</li>
        </ul>
        <ul className='other-list'>
            <li><strong>Popular Locations</strong></li>
            <li>Mumbai</li>
            <li>Maharashtra</li>
            <li>Chennai</li>
            <li>Kolkata</li>
        </ul>

        <ul className='other-list'>
            <li><strong>Popular Locations</strong></li>
            <li>Mumbai</li>
            <li>Maharashtra</li>
            <li>Chennai</li>
            <li>Kolkata</li>
        </ul>

        <ul className='other-list'>
            <li><strong>Popular Locations</strong></li>
            <li>Mumbai</li>
            <li>Maharashtra</li>
            <li>Chennai</li>
            <li>Kolkata</li>
        </ul>

        <div className='footer-icons'>
        <h4>FOLLOW US</h4><br></br>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <PlayCircleIcon/>


        </div>
        <div className='final-div'></div>
       


      
    </div>
  )
}

export default Footer
