import React from 'react';
import '../App.css';


function Travel(props){
  const IMG = props.img;
  const IMG_DEFAULT = 'http://images.jdmagicbox.com/comp/def_content/travel_agents/default-travel-agents-6.jpg';
  const PRICE = props.price;
  return (
      <article className="travelCard">
        <h2>{props.destiny}</h2>
        { //Esto es como un if
          PRICE ? <p className="price">Viaja a {props.destiny} por tan solo {PRICE}€</p> : <p className="price">Precio no disponible</p>
        }
        <img className="destinyImage" src={IMG ? IMG : IMG_DEFAULT} alt={props.destiny}/>
      </article>
  );
};

export default Travel;