import React from 'react'
import '../styles/Projects.css'
import Title from '../assets/projects/title.svg'
import Monopoly from '../assets/projects/monopoly.svg'
import Splytr from '../assets/projects/splytr.svg'
import Dipt from '../assets/projects/DIPT.svg'
import Opportunities from '../assets/projects/Opportunities.svg'
import {ExternalLink} from 'react-external-link';
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div className="projects"
    style={{
    bakgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh'}}>
      <img src={Title} />
      <div className="cards">
      <Link to="/opportunities">
        <img src={Opportunities}/>
      </Link>
      <Link to="/splytr">
        <img src={Splytr}/>
      </Link>
      <Link to="/monopoly">
        <img src={Monopoly}/>
      </Link>
      </div>
    </div>
  )
}

export default Contact

