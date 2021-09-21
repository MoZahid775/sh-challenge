import React from 'react';
import Apod from './Apod';

const ApodContainer = (props) => {
// console.log(props.updateFavoriteOnState)
  let arrayOfComp = props.arrayOfApods.map(apodObj => {

    console.log(apodObj)
    return < Apod key={apodObj.id} apod={apodObj}  updateLikesOnState={props.updateLikesOnState} updateFavoriteOnState={props.updateFavoriteOnState} />
    // deleteQuote={props.deleteQuote}
  });

  return (
  <div>
    <h3>Click on quote for to see source details</h3>
    <ul className="cards">    
      {arrayOfComp}
    </ul>
  </div>  
  );
};
   
export default ApodContainer;