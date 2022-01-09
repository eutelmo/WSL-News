import React from 'react';

import logo from './img/logo_header.png'
import facebook from './img/NicePng_facebook-symbol-png_2071672.png'
import instagram from './img/NicePng_instagram-circle-logo-png_475136.png'
import pinterest from './img/pinterest-logo-icon-3206.png'
import youtube from './img/NicePng_white-youtube-png_425745.png'


import './style/Footer.css'

const Footer = () => {
  return ( 
      <div className='bgColor pointer '>
      <img
        src={instagram}
        className='footer-logo media-size hover'
        alt=''>
        </img>

        <img
        src={facebook}
        className='footer-logo media-size hover'
        alt=''>
        </img>

       <img
        src={logo}
        className='footer-logo wsl-size hover'
        alt=''>
        </img>

        <img
        src={youtube}
        className='footer-logo youtube-size hover'
        alt=''>
        </img>

        
        <img
        src={pinterest}
        className=' footer-logo media-size hover'
        alt=''>
        </img>

      </div>
   );
}
 
export default Footer;