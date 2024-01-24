import {Link} from "react-router-dom";
import Card from "../component/Card.jsx";
import Palette from "../img/palette.svg";
import GirlCode from "../img/girlcode.svg";
import Discord from "../img/discord.svg";
import Splytr from "../img/splytr.svg";
import Monopoly from "../img/gameboard 1.svg";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio--section">
            <div className="portfolio--container-box">
                <div className="portfolio--container--header">
                    <h1>Portfolio</h1>
                    <h3><em>UI/UX*, Front-End&lt;&gt;, Back-End&#10222;&#10223;</em></h3>
                </div>
                <div className="portfolio--card--box">
                    <Card type="()" 
                        preview={Palette}
                        name="My Palette Generator (2023)"
                        desc="Generate and save palettes to a library according to user-set characteristics. Built using Java, Java Swing, and JSON."
                        button={<Link to="https://github.com/mwchelle/palette-library"><p><em><u>Github</u></em></p></Link>}/>
                    <Card type="*, <>" 
                        preview={GirlCode}
                        name="Aritzia Capsule Closet Tester, girlCode x Aritzia Hackathon (2023)"
                        desc="Creates a custom Aritzia capsule closet, complete with colour profile, based on user tastes, designed on Figma, built using React."
                        button={<Link to="https://docs.google.com/presentation/d/1RcnjDqH-qiWf8whYnqS84zSWSZA0dx8c0183lSqNpzc/edit?usp=sharing"><p><em><u>Read More</u></em></p></Link>}/>
                    <Card type="()" 
                        preview={Discord}
                        name="Discord Stock Pull Bot (2023)"
                        desc="Discord server bot allowing users to pull a stock price by messaging the ticker, built on Python using Discord and yfinance."
                        button={<Link to="https://github.com/mwchelle/stockpullbot"><p><em><u>Github</u></em></p></Link>}/>
                </div>
                <div className="portfolio--card--box2">
                    <Card type="*" 
                        preview={Splytr}
                        name="Splytr, helloHacks edTech (2022)"
                        desc="An edtech platform looking to make synchroneous online learning engaging by custom splitting your screen. Mid-fidelity wireframe created using Figma."
                        button={<Link to="https://docs.google.com/presentation/d/1q2LfLKEAdFN2EVtVyayNjk4tBc3ljU5J5sVbL5cSoVs/edit?usp=sharing"><p><em><u>Read More</u></em></p></Link>}/>
                    <Card type="()" 
                        preview={Monopoly}
                        name="Mr.Chen's Speed Monopoly (2022)"
                        desc="A simplified player vs. CPU version of Monopoly, built on Java following OOP principles."
                        button={<Link to="https://github.com/mwchelle/monopoly"><p><em><u>Github</u></em></p></Link>}/>
                </div>
            </div>
        </section>
    );
}