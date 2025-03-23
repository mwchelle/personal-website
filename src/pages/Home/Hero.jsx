import React from 'react';
import Typed from 'typed.js';

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
            </div>
        </section>
    );
}