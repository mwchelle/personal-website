import React from 'react';
import Typed from 'typed.js';
import HeroSprite from '../img/hero_sprite.svg';
import EmailIcon from '../img/email_icon.svg';
import LinkedinIcon from '../img/linkedin_icon.svg';
import GithubIcon from '../img/github_icon.svg';
import DownIcon from  '../img/down_icon.svg';
import {Link} from 'react-router-dom';
import Contact from './Contact';

export default function Hero() {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['UI/UX Designer.', 'Product Designer.', 'UX Researcher.','Developer.', 'Product Manager.',],
            typeSpeed: 40,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="hero" className="hero--section">
            <div className="hero--content-box">
                <div className="hero--content">
                    <h1 className="hero--section--title">
                        <em>Hi,</em>
                        <br />
                        I'm Michelle!
                    </h1>
                    <h2 className="hero--section--info">
                        &gt; I am a <em><span className="hero--section--changing text" ref={el} /></em>
                        <br />
                        &gt; Second year Business + CS &#91;BUCS&#93; Student @ UBC Vancouver
                    </h2>
                </div>
                <div className="hero--img">
                    <img src={HeroSprite} />
                </div>
            </div>
            <div className="hero--button-box">
                <Link to={Contact}>
                <button className="hero--button">
                    <img src={EmailIcon} />
                </button>
                </ Link>
                <Link to="https://www.linkedin.com/in/michelle-wan-0105/">
                <button className="hero--button">
                    <img src={LinkedinIcon} />
                </button>
                </Link>
                <Link to="https://github.com/mwchelle">
                <button className="hero--button">
                    <img src={GithubIcon} />  
                </button>
                </Link>
            </div>
            <div className="hero--downwards">
                <img src={DownIcon} />
            </div>
        </section>
    );
}