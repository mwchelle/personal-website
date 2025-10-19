import { useState, useEffect } from "react";
import About from "./Hero";
import Projects from "./Portfolio";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// assets
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";
import Me from "../assets/headshot.png";

export default function Main() {
  const [section, setSection] = useState("about");
  const [fade, setFade] = useState(true); // Controls fade effect
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sections = {
    about: <About />,
    projects: <Projects />,
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionChange = (newSection) => {
    if (newSection !== section) {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setSection(newSection);
        setFade(true); // Fade back in after switching
      }, 300); // Match CSS animation duration
    }
  };

  if (windowWidth < 1250) {
  return (
    <div className="unsupported-device">
      <h1>my website isn't responsive, sorry 😔</h1>
    </div>
  );
}

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-top">
            <img src={Logo} alt="mw*" className="sidebar-logo" />
          </div>

          <div className="sidebar-main">
            <img src={Me} alt="headshot" className="me" />
            <ul>
              <li
                onClick={() => handleSectionChange("about")}
                className={section === "about" ? "active" : ""}
              >
                about
              </li>
              <li
                onClick={() => handleSectionChange("projects")}
                className={section === "projects" ? "active" : ""}
              >
                projects
              </li>
            </ul>
          </div>

          {/* bottom footer with symmetric padding */}
          <p className="footer-text">
            website made with love <br />
            by Michelle Wan, last <br />
            updated Oct 2025
          </p>
        </div>
      </nav>

      <div className="header">
        <div className="header-right">
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/mwchelle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xs" />
            </a>
            <a
              href="https://github.com/mwchelle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="xs" />
            </a>
            <a href="mailto:mw.chellecx@gmail.com">
              <FontAwesomeIcon icon={faSquareArrowUpRight} size="xs" />
            </a>
          </div>
          <p>resume available by request</p>
        </div>
      </div>

      <main className={`content ${fade ? "fade-in" : "fade-out"}`}>
        {sections[section]}
      </main>
    </div>
  );
}
