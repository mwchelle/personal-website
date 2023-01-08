import React from 'react';
import Drawing from '../assets/newtry_1 1.svg';
import {ExternalLink} from 'react-external-link';
import Insta from '../assets/email.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import {Link} from 'react-router-dom';
import Arrows from '../assets/arrows.png';
import Background from '../assets/background.png';
import '../styles/Home.css';
import Text from '../assets/all-text.svg';
import { WindowSharp } from '@mui/icons-material';

function Home() {
  return (
    <div className="home"
    style={{backgroundImage: `url(${Background})`,
            bakgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '90vh'}}>
              <div className="center">
                <div className="text">
                <img src={Text}/>
                </div>
                <div className="drawing">
                <img src={Drawing}/>
                </div>
              </div>
          <div class="socials">
            <ExternalLink href = "mailto:mw.chellecx@gmail.com">
              <button>
              <img src={Insta}/>
              </button>
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/michelle-wan-0105/">
            <button>
              <img src={Linkedin}/>
            </button>
           </ExternalLink>
          <ExternalLink href="https://github.com/mwchelle">
           <button>
            <img src={Github}/>
            </button>
          </ExternalLink>
        </div>
        <div class="arrows">
        <Link to="/about">
        <img src={Arrows}/>
       </Link>
        </div>
      
      </div>
  )
}

export default Home
