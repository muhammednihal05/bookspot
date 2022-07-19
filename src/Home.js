import React from 'react';
import "./Home.css";
import pic from './Bookspot.png';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='bg_image' src={pic} alt='logo'/>
            
        </div>  
    </div>
  )
}

export default Home
