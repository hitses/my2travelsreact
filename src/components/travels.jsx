import React, {Component} from 'react';
import Travel from './travel';
import '../App.css';
/* import getTravels from '../controllers/travels'; */

class Travels extends Component{
  constructor(props){
    super(props)
    this.state = {
      travels: [
        {
          destiny: 'Villena',
          price: '200',
          img: 'https://servitaxivalencia.com/wp-content/uploads/2017/04/servitaxivalencia-paisaje-villena.jpg'
        },
        {
          destiny: 'Maldivas',
          price: '3200',
          img: 'http://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/09/25/15063367467853.jpg'
        },
      ],
    };
    /* getTravels() */
  };

  render(){
    return <section>
        {this.state.travels.map(travel => <Travel {...travel}></Travel>)}
      </section>
  };
};

export default Travels;