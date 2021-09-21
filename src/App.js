
import './App.css';

import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
// import SearchBar from './Components/SearchBar';
import ApodContainer from './Components/ApodContainer';
// import AddQuote from './Components/AddQuote';


export default class App extends Component {

  state = {
    apods: [],
    filter: "",
    favoritesFilterActive: false 
  }

  componentDidMount(){
    let api_key = "qd4YY6qHiCDOq4bC4O558YvEec1N9jWP0ULlq1yz"
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=10`)
      .then(res => res.json())
      .then((astroArr) => {
        console.log(astroArr)
        this.setState({
          apods: astroArr
        })
      })
  }

  // addQuoteToEndOfState = (newQuote) => {
  //   let newArr = [...this.state.quotes, newQuote]
  //   this.setState({
  //     quotes: newArr
  //   })
  // }

  //the below function deletes a card off the page and off the backend
  // deleteQuote = (id) => {
  //   fetch(`http://localhost:4000/quotes/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(res => res.json())
  //     .then(() => {
       
  //      let arrayWithoutDeleted = this.state.quotes.filter((quoteObj) => { 
  //        return quoteObj.id !== id
  //            })
  //            this.setState({      
  //                quotes: arrayWithoutDeleted

  //            })    
  //     })
  // }

  //The Below funtion updates the filter in the state above
  
  // updateFilterState= (value) => {
  //    this.setState({
  //      filter: value
  //    })
  // }
  
  //The Below function updates the likes on the fron end
  updateLikesOnState =(updatedObj) =>{
    let copyOfQuotes = this.state.quotes.map((quoteObj) =>{
      if(quoteObj.id === updatedObj.id){
         return updatedObj  
      } else {
      return quoteObj
      }     
    })
    this.setState({
    quotes: copyOfQuotes
    })
  }

  //The Below function update the toggle for the favorites state above
  favoritesStateToggle = () => {
  this.setState({
    favoritesFilterActive: !this.state.favoritesFilterActive},
    )
  }

  updateFavoriteOnState =(updatedObj) => {
   let anotherCopyOfQuotes = this.state.quotes.map((quoteObj) =>{
    if (quoteObj.id == updatedObj.id){
    return   updatedObj
    }else{
    return quoteObj}
    })
    this.setState({
    quotes: anotherCopyOfQuotes

    })
  }





  render() {
   
    let arrayOfApods = this.state.apods
    // let newArrayofQuotes = arrayOfQuotes.filter((arrayObj) => { 
    //   if(this.state.favoritesFilterActive){
    //   return (arrayObj.favorite == true)
    //   } else {
    //   return (arrayObj.author.toLowerCase().includes(this.state.filter.toLowerCase()) || arrayObj.source.toLowerCase().includes(this.state.filter.toLowerCase()))}
    // })
    



    return (
      <div>
      <Header />
      {/* <SearchBar filter={this.state.filter} updateFilterState={this.updateFilterState} /> */}
      {/* <AddQuote addQuoteToEndOfState={this.addQuoteToEndOfState} /> */}
      {/* <button onClick={this.favoritesStateToggle}>Filter by Favorites {this.state.favoritesFilterActive? "ON" : "OFF" }</button> */}
      <ApodContainer arrayOfApods={arrayOfApods} deleteQuote={this.deleteQuote} updateLikesOnState={this.updateLikesOnState} updateFavoriteOnState={this.updateFavoriteOnState}/>  
      </div>
    )
  }
}
