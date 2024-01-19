function Card(props){
    return (
        <div className="card">
            <div className="card--content-box">
                <div className="card--intro">
                    <h3 className="card--type">{props.type}</h3>
                </div>
                <img className="card--img" src={props.preview}/>
                <div className="card--text">
                    <center><em><h3 className="card--name">{props.name}</h3></em></center>
                    <center><p className="card--desc">{props.desc}</p></center>
                </div>
                <button className="card--button">{props.button}</button>
                </div>
        </div>
    );
}

export default Card