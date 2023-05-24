import React from "react";
import './App.css';

function Card(props){
    const {id, imgsrc, title,sname,link } = props
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={imgsrc} alt="pic" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">#{id} {title}</span>
                        <h3 className="card__title">{sname}</h3>
                        <a href={link} target="_blank" rel="noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;