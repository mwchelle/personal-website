import { useState, useEffect } from "react";
import About from "./Hero";
import Projects from "./Portfolio";
// import Etc from "./sections/Etc";
import "./Main.css"; // Import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// assets
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import Me from '../assets/headshot.png';

export default function Main() {
    const [section, setSection] = useState("about");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const sections = {
        about: <About />,
        projects: <Projects />,
        // etc: <Etc />
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // If the window width is less than 1050px, display the "not supported" message
    if (windowWidth < 1200) {
        return (
            <div className="unsupported-device">
                <h1>my website isn't responsive, sorry 😔</h1>
            </div>
        );
    }

    return (
        <div className="container">
            {/* Fixed Sidebar */}
            <nav className="sidebar">
                <div className="sidebar-content">
                    <img src={Me} alt="headshot" className="me" />
                    <ul>
                        <li
                            onClick={() => setSection("about")}
                            className={section === "about" ? "active" : ""}
                        >
                            about
                        </li>
                        <li
                            onClick={() => setSection("projects")}
                            className={section === "projects" ? "active" : ""}
                        >
                            projects
                        </li>
                        {/* <li onClick={() => setSection("etc")}>Etc.</li> */}
                    </ul>
                    <p className="footer-text">
                        website made with love <br />by Michelle Wan, last <br />updated Mar 2025
                    </p>
                </div>
            </nav>

            {/* Header */}
            <div className="header">
                <div className="header-left">
                    <img src={Logo} alt="logo" className="logo" />
                </div>
                <div className="header-right">
                    <div className="buttons">
                        <a href="https://www.linkedin.com/in/mwchelle" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="xs" />
                        </a>
                        <a href="https://github.com/mwchelle" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} size="xs" />
                        </a>
                        <a href="mailto:mw.chellecx@gmail.com">
                            <FontAwesomeIcon icon={faSquareArrowUpRight} size="xs" />
                        </a>
                    </div>
                    <p>resume available by request</p>
                </div>
            </div>

            {/* Dynamic Content Area */}
            <main className="content">
                {sections[section]}
            </main>
        </div>
    );
}
