import React from 'react'
import {ExternalLink} from 'react-external-link';
import Title from '../assets/about me/title.svg';
import Picture from '../assets/about me/picture.svg';
import ResumeButton from '../assets/about me/resume.svg';
import Current from '../assets/about me/currentexplore.svg';
import Text from '../assets/about me/text.svg';
import '../styles/About.css';

function About() {
  return (
    <div className="about"
    style={{backgroundColor: '#333',
            bakgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'}}>
      <div className="leftside">
        <div className="together">
        <img src={Picture}/>
        <ExternalLink href="https://docs.google.com/document/d/1nQIDsPdYm1na9JasWdOoJBBdE2MskK_O/edit?usp=sharing&ouid=101240767541883113756&rtpof=true&sd=true">
            <button>
                <img src={ResumeButton}/>
            </button>
        </ExternalLink>
        </div>
        <img src={Current}/>
      </div>
      <div className="rightside">
        <img src={Title}/>
        <img src={Text} />
      </div>
    </div>
  )
}

export default About

