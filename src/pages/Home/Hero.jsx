import React from 'react';
import Typed from 'typed.js';
import './Hero.css';  // Import the Hero.css file

import Bobo from '../assets/stickers/bobo.png';
import Williams from '../assets/stickers/williams.png';
import Panda from '../assets/stickers/panda.png';
import Raptor from '../assets/stickers/raptors.png';
import Skullpanda from '../assets/stickers/skullpanda.png';
import TFT from '../assets/stickers/tft.png';

export default function Hero() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'ui/ux designer',
                'ux researcher',
                'developer',
                'data analyst',
                'tech consultant',
                'product manager'
            ],
            typeSpeed: 35,
            backSpeed: 25,
            backDelay: 500,
            startDelay: 500,
            loop: false, 
            showCursor: false, 
        });

        return () => {
            typed.destroy();
        };
    }, []);

    // State for the stickers (no initial position required)
    const [stickers, setStickers] = React.useState([
        { id: 1, src: Bobo, alt: 'Bobo Sticker', subtitle: 'Bobo & Coco Collector' },
        { id: 2, src: Williams, alt: 'Williams Sticker', subtitle: 'Go Williams!' },
        { id: 3, src: Panda, alt: 'Panda Sticker', subtitle: 'Panda <3' },
        { id: 4, src: Raptor, alt: 'Raptor Sticker', subtitle: 'Sad Raptors Fan ):' },
        { id: 5, src: Skullpanda, alt: 'Skullpanda Sticker', subtitle: 'Skullpanda Collector' },
        { id: 6, src: TFT, alt: 'TFT Sticker', subtitle: 'Peaked D2, Set 4.5 💪' }
    ]);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-text">
                <div className="hero-content-header">
                    <h2 className="hero-start">
                        hi, i'm michelle!
                    </h2>
                    <h1 className="hero-header">
                        i'm a <em><span className="hero--section--changing" ref={el} /></em> who believes in value-based innovation in technology.
                    </h1>
                </div>
                <div className="hero-content-about">
                    <hr className="custom-hr" />
                    <div className="hero-currently">
                        <h3>currently</h3>
                        <h4>product @ amex, 4th year cs + business @ ubc</h4>
                    </div>
                    <div className="hero-driven">
                        <h3>driven by</h3>
                        <h4>products & systems that help people help people</h4>
                    </div>
                    <hr className="custom-hr" />
                    <div className="hero-also">
                        <h3>also</h3>
                        <h4>hackathons @ nwplus, TA @ ubc, prose on <a href="https://aury.substack.com/" target="_blank" rel="noopener noreferrer">substack</a></h4>
                    </div>
                    <div className="hero-loves">
                        <h3>loves</h3>
                        <h4>f1 🏎️ , the toronto raptors 🏀, karaoke 🎤, good cafes 🍵</h4>
                    </div>
                    <div className="hero-loves">
                        <h3>previously</h3>
                        <h4>ux research @ huawei, vp ext @ ubc esports</h4>
                    </div>
                </div>

                <div className="hero-stickers">
                    {stickers.map(sticker => (
                        <div key={sticker.id} className="sticker-container">
                            <img
                                src={sticker.src}
                                alt={sticker.alt}
                                className="sticker"
                            />
                            <div className="sticker-subtitle">
                                {sticker.subtitle}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
