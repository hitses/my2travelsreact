import React from 'react';
import '../App.css';


function Travel(props){
  const IMG = props.img;
  const IMG_DEFAULT = 'http://images.jdmagicbox.com/comp/def_content/travel_agents/default-travel-agents-6.jpg';
  const PRICE = props.price;
  return (
      <div>
        <h2>{props.destiny}</h2>
        { //Esto es como un if
          PRICE && 
          <h3>Viaja a {props.destiny} por tan solo {PRICE}€</h3>
        }
        <img className="destiny" src={IMG ? IMG : IMG_DEFAULT} alt={props.destiny}/>
      </div>
  );
};

export default Travel;