import React from 'react'
import {ExternalLink} from 'react-external-link';
import {Link} from 'react-router-dom';
import Github from '../assets/github.png';
import '../styles/Monopoly.css';
import Gameboard from '../assets/projects/monopoly/monopoly.PNG';
import Description from '../assets/projects/monopoly/description.svg';
import Dev from '../assets/projects/monopoly/developed by.svg';
import Focus from '../assets/projects/monopoly/focus.svg';
import Framework from '../assets/projects/monopoly/framework.svg';
import Classes from '../assets/projects/monopoly/classes.svg';
import Flow from '../assets/projects/monopoly/flow.svg';

function Monopoly() {
  return (
    <div className="monopoly"
    style={{
        bakgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'}}>
        <div className="intro">
            <h1>Mr. Chen's Speed Monopoly (2021)</h1>
            <img src={Description}/>
            <img src={Gameboard}/>
            <img src={Dev}/>
        </div>
      <div className="framework">
        <h1>Project Framework and Objectives</h1>
        <div className="inside">
        <div className="text">
        <img src={Framework}/>
        <img src={Focus}/>
        </div>
        <div className="picture">
        <img src={Flow}/>
        </div>
        </div>
      </div>
    <div className="classes">
        <h1>Classes</h1>
        <img src={Classes}/>
        
    </div>
    <div className="access">
        <h1>To access the game, Click the following link:</h1>
        <ExternalLink href="https://github.com/mwchelle/monopoly">
           <button>
            <img src={Github}/>
            </button>
        </ExternalLink>
        <Link to="/projects">Back to Projects</Link>
    </div>
    </div>
  )
}

export default Monopoly
