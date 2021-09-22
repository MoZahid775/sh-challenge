import React from 'react';
import Apod from './Apod';

const ApodContainer = (props) => {


  let arrayOfComp = props.arrayOfApods.map(apodObj => {

    console.log(props.deleteApod)
    return < Apod key={apodObj.id} apod={apodObj} deleteApod={props.deleteApod} />
    
  });

  return (
  <div>
    <h2 className="subtitle">Brought to you by Nasa's Image API</h2>
    <ul className="cards">    
      {arrayOfComp}
    </ul>
  </div>  
  );
};
   
export default ApodContainer;