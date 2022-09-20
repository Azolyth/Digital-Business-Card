import React from 'react';

// Images
import headshot from '../images/headshot.png';

const Info = () => {
  return (
    <header>
      <img className='headshot-img' src={headshot} alt='Professional Headshot' />
      <h1 className='full-name'>Laura Smith</h1>
      <h2 className='job-description'>Frontend Developer</h2>
      <h3 className='website'>laurasmith.website</h3>
      <button className='email-btn'>Email</button>
    </header>
  );
};

export default Info;
