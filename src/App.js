
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ApodContainer from './Components/ApodContainer';
import Footer from './Components/Footer';


export default class App extends Component {

  state = {
    apods: []
  }



  //**********************************The below pulls the data from the Nasa API and sets it to state*******************************************
  componentDidMount(){
    let api_key = "qd4YY6qHiCDOq4bC4O558YvEec1N9jWP0ULlq1yz"
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=10`)
      .then(res => res.json())
      .then((astroArr) => {
        this.setState({
          apods: astroArr
        })
      })
  }


  //*********************************the below function deletes a card off the page**************************************************************
  deleteApod = (id) => {
       
       let arrayWithoutDeleted = this.state.apods.filter((apodObj) => { 
         return apodObj.id !== id
             })
             this.setState({      
                 apods: arrayWithoutDeleted
             })    
  }
  

  

  render() {
   
    let arrayOfApods = this.state.apods
    



    return (
      <div id="appjs" >
      <Header />
      <ApodContainer arrayOfApods={arrayOfApods} deleteApod={this.deleteApod} />  
      <Footer />
      </div>
    )
  }
}
