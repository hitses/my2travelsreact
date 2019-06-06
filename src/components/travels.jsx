import React, {Component} from 'react';
import Travel from './travel';
import '../App.css';

class Travels extends Component{
  constructor(props){
    super(props)
    this.state = {
      travels: [
        {
          destiny: 'Japón',
          price: '1800',
          img: 'https://staticuestudio.blob.core.windows.net/buhomag/2016/02/23142930/japon.jpg?auto=compress,format'
        },
        {
          destiny: 'Alemania',
          price: '800',
          img: 'http://assets.abriendobrecha.tv.s3.amazonaws.com/wp-content/uploads/2017/01/alemania-curiosidades.jpg'
        },
        {
          destiny: 'Canadá',
          price: '1600',
          img: 'https://static1.mansionglobal.com/production/media/article-images/0ab2a4c7cd438ab9e36109bba1c0f8c2/large_GettyImages-177873190.jpg'
        },
      ],
    };
  }

  render(){
    return <article>
        {this.state.travels.map(travel => <Travel {...travel}></Travel>)}
      </article>
  }
}

export default Travels;