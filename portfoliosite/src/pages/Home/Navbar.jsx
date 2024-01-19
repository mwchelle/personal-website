import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Logo from '../img/logo.svg'

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={'navbar ${navActive ? "active" : ""}'}>
            <div>
                <img src={Logo} />
            </div>
            <a
                className={'nav__hamburger ${navActive ? "active" : ""}'}
                onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={'nav--items ${navActive ? "active" : ""}'}>
                <ul>
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;