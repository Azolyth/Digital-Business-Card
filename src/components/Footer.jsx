import React from 'react';

// Social Media Icons
import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import igIcon from '../images/ig-icon.png';
import githubIcon from '../images/github-icon.png';

const Footer = () => {
  return (
    <footer>
      <img src={twitterIcon} />
      <img src={facebookIcon} />
      <img src={igIcon} />
      <img src={githubIcon} />
    </footer>
  );
};

export default Footer;
