import ProfilePic from "../img/aboutimg.png";
import {Spotify} from "react-spotify-embed";
import {Link} from "react-router-dom";

export default function About() {
    return (
        <section id="about" className="about--section">
            <div className="about--content-box">
                <h1 className="hero--section--title">
                    <u>About <em>Me</em></u>
                    <br/>
                    <br/>
                </h1>
                <div className="about--content">
                    <div className="about--information">
                        <div className="about--information-paragraph">
                        <p>As a business + cs student, I’m passionate about designing and developing technologies that really speak to the needs of users and help people help people. I’m all about user-engagement, experience, and exploring the way identity shapes our usage of technology.
                        <br/>
                        <br/>
                        Outside of tech, I love music, creative writing, esports/gaming, fashion, cute coffee shops, and the Toronto Raptors. 
                        <br/>
                        <br/>
                        <em>Find out more about my hobbies -&gt;</em> </p>
                        </div>
                        <div className ="about--information-points">
                            <div>
                                <img src={ProfilePic} />
                            </div>
                            <div>
                                <h3>I know: Java, Python, HTML/CSS, C++, JavaScript, React, Wireframing, User Testing, Prototyping, R, Figma</h3>
                            </div>
                        </div>
                    </div>
                    <div className="about--other">
                        <div className="about--other--title">
                            <h2>glimpses of me (art & all)</h2>
                        </div>
                        <div className="about--spotify">
                            <Spotify link="https://open.spotify.com/playlist/6tH9jVSnmfj6Qaycaf9NFd?si=e62033fb7ae44e57" />
                        </div>
                        <div className="about--substack">
                            <Link to="https://aury.substack.com">
                                <button className="substack--button">
                                    Read my Substack
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}