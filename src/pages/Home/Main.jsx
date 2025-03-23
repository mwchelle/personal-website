import { useState } from "react";
import About from "./Hero";
import Projects from "./Portfolio";
// import Etc from "./sections/Etc";
import "./Main.css"; // Import CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';


export default function Main() {
    const [section, setSection] = useState("about");

    const sections = {
        about: <About />,
        projects: <Projects />,
        // etc: <Etc />
    };

    return (
        <div className="container">
            {/* Fixed Sidebar */}
            <nav className="sidebar">
                <h1>Michelle Wan</h1>
                <ul>
                    <li onClick={() => setSection("about")}>About</li>
                    <li onClick={() => setSection("projects")}>Projects</li>
                    {/* <li onClick={() => setSection("etc")}>Etc.</li> */}
                </ul>
            </nav>

            {/* Header */}
            <div className="header">
                <div className="header-left">
                    <img src={Logo} alt="logo" className="logo" />
                </div>
                <div className="header-right">
                    <div className = "buttons">
                        <a href="https://www.linkedin.com/in/mwchelle" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="xs" beat />
                        </a>
                        <a href="https://github.com/mwchelle" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} size="xs" beat />
                        </a>
                        <a href="mailto:mw.chellecx@gmail.com">
                            <FontAwesomeIcon icon={faPaperPlane} size="xs" beat />
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
