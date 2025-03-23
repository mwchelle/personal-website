import devpost from '../assets/devpost.svg';
import ProjectCard from "../component/Card";
import begriddy from '../assets/griddy.gif';
import soundchain from '../assets/soundchain.png';
import capsule from '../assets/capsule.gif';
import presentify from '../assets/presentify.gif';
import './Portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            title: "BeGriddy 🏆",
            titleColor: "white",
            image: begriddy,
            tags: ["pm", "ui/ux"],
            link: "https://devpost.com/software/begriddy",
            description: "A spontaneous griddy-off vs. friends. Get GriddyScored (w/ computer vision), and rise to the top of the GriddyBoard! 💃🕺💯"
        },
        {
            title: "soundchain 🏆",
            titleColor: "black",
            image: soundchain, // Image for Soundchain
            tags: ["pm", "ui/ux", "dev"],
            link: "https://devpost.com/software/soundchain",
            description: "Stream, crowdfund, and take control of your music career—no record label needed, just you, your fans, and blockchain-powered beats! 🎶💸🎧"
        },
        {
            title: "Capsule Closet",
            titleColor: "black",
            image: capsule, // Capsule Closet
            tags: ["ui/ux", "dev"],
            link: "https://docs.google.com/presentation/d/1RcnjDqH-qiWf8whYnqS84zSWSZA0dx8c0183lSqNpzc/edit?usp=sharing",
            description: "Take the quiz, let our algorithm find your colour season, and unlock a personalized wardrobe that’s all you! 🖤👗🎨"
        },
        {
            title: "Presentify",
            titleColor: "white",
            image: presentify, // Video for Presentify
            tags: ["pm", "ui/ux", "dev"],
            link: "https://yourproject.com/presentify",
            description: "Turn your words into a dynamic presentation with real-time subtitles, visuals, and audio effects—making presentations easier, more interactive, and accessible for all! 🎤📊✨"
        },
    ];

    return (
        <section id="portfolio" className="projects-section">
            <div className="project-container">
                <div className="header-container">
                    {/* Wrap text and Devpost icon in a flex container */}
                    <h2 className="text">hacking and building for fun and for good.</h2>
                    <a href="https://devpost.com/mwchelle?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" className="devpost-header">
                        <img src={devpost} alt="Devpost Link" className="devpost-icon" />
                    </a>
                </div>

                <div className="projects-box">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="projects-add">
                    <h2>also</h2>

                    {/* Telco Customer Churn and Splytr with tags */}
                    <h3>
                        <a href="telco-customer-churn-link" className="project-link">Telco Customer Churn ↗</a>
                        <span className="tags-container">
                            <span className="tag">data</span>
                            <span className="tag">ml</span>
                        </span>
                    </h3>

                    <h3>
                        <a href="splytr-link" className="project-link">Splytr ↗</a>
                        <span className="tags-container">
                            <span className="tag">ui/ux</span>
                        </span>
                    </h3>
                </div>
            </div>
        </section>
    );
}
