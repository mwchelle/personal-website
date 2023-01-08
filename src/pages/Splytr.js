import React from 'react'
import {ExternalLink} from 'react-external-link';
import {Link} from 'react-router-dom';
import '../styles/Splytr.css';

import Description from '../assets/projects/splytr/description.svg';
import Logo from '../assets/projects/splytr/logo.svg';
import Designer from '../assets/projects/splytr/designer.svg';

import Problem from '../assets/projects/splytr/problemid.svg';
import Stats from '../assets/projects/splytr/stats.svg';

import Features from '../assets/projects/splytr/featuresum.svg';
import Welcome from '../assets/projects/splytr/welcome.svg';
import Lesson from '../assets/projects/splytr/lesson.svg';
import Design from '../assets/projects/splytr/design.svg';
import Key from '../assets/projects/splytr/keyft.svg';
import Customize from '../assets/projects/splytr/customize.svg';
import TeacherSplit from '../assets/projects/splytr/teachersplit.svg';

import View from '../assets/projects/splytr/view.svg';
import Teacher from '../assets/projects/splytr/teacherview.svg';
import Student from '../assets/projects/splytr/studentview.svg';

import Text from '../assets/projects/splytr/font.svg';
import Colours from '../assets/projects/splytr/colours.svg';
import Hover from '../assets/projects/splytr/hover.svg';
import Hover1 from '../assets/projects/splytr/hover1.svg';
import Hover2 from '../assets/projects/splytr/hover2.svg';
import Hover3 from '../assets/projects/splytr/hover3.png';

import Process from '../assets/projects/splytr/process.svg';
import Rough from '../assets/projects/splytr/rough.PNG';

import Final from '../assets/projects/splytr/final.svg';
import FinalScreen from '../assets/projects/splytr/finalscreen.svg';

function Splytr() {
  return (
    <div className="splytr"
    style={{
      bakgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh'}}>
      <div className="intro">
        <h1>Splytr (2022)</h1>
        <img src={Description}/>
        <div className="logo">
        <img src={Logo}/>
        </div>
        <img src={Designer}/>
      </div>
      <div className="problem"> 
        <div className="iden">
          <img src={Problem}/>
        </div>
        <div className="stats">
          <img src={Stats}/>
        </div>
      </div>
      <div className="features">
        <h1>Feature Development & Considerations</h1>
        <div className="open">
          <img src={Features}/>
          <img src={Welcome}/>
        </div>
        <img src={Lesson}/>
        <div className="lesson">
          <img src={Design}/>
          <img src={Key}/>
          <img src={TeacherSplit}/>
          <img src={Customize}/>
        </div>
        <img src={View}/>
        <div className="views">
          <img src={Teacher}/>
          <img src={Student}/>
        </div>
      </div>
      <div className="style">
        <h1>Style Choices</h1>
        <div className="fonts">
          <img src={Text}/>
          <img src={Colours}/>
        </div>
        <img src={Hover}/>
        <div className="hover">
          <img src={Hover1}/>
          <img src={Hover2}/>
        </div>
        <img src={Process}/>
        <div className="process">
          <img src={Rough}/>
        </div>
      </div>
      <div className="ending">
      <h1>Final Demo</h1>
      <img src={Final}/>
      </div>
      <div className="final">
        <ExternalLink href="https://www.figma.com/proto/ovDIeNBgHzYNmmRizkMR8M/Splytr---Hello-Hacks!?page-id=7%3A6&node-id=7%3A13&starting-point-node-id=7%3A13&scaling=scale-down">
        <img src={FinalScreen}/>
        </ExternalLink>
      <Link to="/projects">Back to Projects</Link>
      </div>
    </div>
  )
}

export default Splytr
