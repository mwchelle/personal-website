import {Link} from "react-router-dom";
import Card from "../component/Card.jsx";
import Palette from "../img/palette.svg";
import GirlCode from "../img/girlcode.svg";
import Discord from "../img/discord.svg";

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
                    desc="Creates a custom Aritzia capsule closet based on user tastes, designed on Figma, built using React."
                    button={<Link to="/girlcode"><p><em><u>Read More</u></em></p></Link>}/>
                    <Card type="()" 
                    preview={Discord}
                    name="Discord Stock Pull Bot (2023)"
                    desc="Pull a stock price by ticker, built on Python using Discord and yfinance."
                    button={<Link to="https://github.com/mwchelle/stockpullbot"><p><em><u>Github</u></em></p></Link>}/>
                </div>
                <div className="portfolio--more">
                    <Link to="/portfolio">
                        <button className="portfolio--more--button">
                            <h3><em><u>More Projects</u></em></h3>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}