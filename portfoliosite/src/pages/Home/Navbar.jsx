import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Logo from '../img/logo.svg'

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
      setNavActive(!navActive);
    };
  
    const closeMenu = () => {
      setNavActive(false);
    };
  
    // useEffect(() => {
    //   const handleResize = () => {
    //     if (window.innerWidth <= 500) {
    //       closeMenu;
    //     }
    //   };
  
    //   window.addEventListener("resize", handleResize);
  
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
  
    // useEffect(() => {
    //   if (window.innerWidth <= 1200) {
    //     closeMenu;
    //   }
    // }, []);
  

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src={Logo} />
            </div>
            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`nav--items ${navActive ? "active" : ""}`}>
                <Link to="/">
                    <button className="navbar--button">
                        Home
                    </button>
                </Link>
                <Link to="#about">
                    <button className="navbar--button">
                        About
                    </button>
                </Link>
                <Link to="#portfolio--section">
                    <button className="navbar--button">
                        Portfolio
                    </button>
                </Link>
                <Link to="#contact--section">
                    <button className="navbar--button">
                        Contact
                    </button>
                </Link>
                <Link to="https://docs.google.com/document/d/1tI8BZM_ia7zuwYwgnCUfXh_dJNrNmso7/edit?usp=sharing&ouid=101240767541883113756&rtpof=true&sd=true">
                    <button className="navbar--resume">
                        Resume
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;