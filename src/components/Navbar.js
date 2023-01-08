import React, {useState} from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import {ExternalLink} from 'react-external-link';

function Navbar() {

    const[openLinks, setOpenLinks]=useState(false)

    const toggleNavbar=() => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}> 
            <Link to ="/">
                <img src={Logo}/>
            </Link>
            
            <div className="hiddenLinks">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <ExternalLink href = "mailto:mw.chellecx@gmail.com">Contact</ExternalLink>
                <ExternalLink href="https://docs.google.com/document/d/1nQIDsPdYm1na9JasWdOoJBBdE2MskK_O/edit?usp=sharing&ouid=101240767541883113756&rtpof=true&sd=true">
                Resume</ExternalLink>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <ExternalLink href = "mailto:mw.chellecx@gmail.com">Contact</ExternalLink>
            <ExternalLink href="https://docs.google.com/document/d/1nQIDsPdYm1na9JasWdOoJBBdE2MskK_O/edit?usp=sharing&ouid=101240767541883113756&rtpof=true&sd=true">
                Resume</ExternalLink>
            <button onClick={toggleNavbar}> 
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar
