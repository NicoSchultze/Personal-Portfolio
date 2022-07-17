import React from 'react';
import { BsGithub} from 'react-icons/bs';
import { SiLinkedin } from "react-icons/si"
import { BiMessageDetail } from "react-icons/bi"




const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/nico-schultze97/" rel="noreferrer" target="_blank"><SiLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/NicoSchultze" rel="noreferrer" target="_blank"><BsGithub /></a>
    </div>
    <div>
      <a href="#contact"><BiMessageDetail /></a>
    </div>
  </div>
);

export default SocialMedia;