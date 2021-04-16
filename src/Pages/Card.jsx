import React from 'react';
import "./Card.css"
function Card(props)
{
    console.log(props);
   return(
       <>
          <div className="cards">
            <div className="card">
            <div className="imger">
                <img alt="Card Image" src={props.imgsrc}/>
            </div>
            <div className="writtenarea">
                <span className="card_category">{props.category}</span>
                <h3 className="card_title">{props.tname}</h3>
            <a href={props.linker}>
                <button>Watch Now</button>
            </a>
            </div>
            </div>
        </div>
       </>
   ) 
}

export default Card;