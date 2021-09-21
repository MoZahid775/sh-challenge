import React, { Component } from 'react';
import { Card, CardContent, Icon, Image } from 'semantic-ui-react'

export default class Apod extends Component {
  state = {       
    showingFront : true,
    favorite: false
  }

  toggleShowingFront = () => {
    this.setState({
      showingFront: !this.state.showingFront
    })
  }

  // likeIncreaser = () => {
  //   this.props.quote.likes += 1
  //   let data = {likes: this.props.quote.likes}
  //   fetch(`http://localhost:4000/quotes/${this.props.quote.id}`, {
  //     method: "PATCH",
  //     headers: {
  //     "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //     })
  //     .then((r) => r.json())
  //     .then((quoteObj) => this.props.updateLikesOnState(quoteObj));
  // }


  // deleteHandler = () => {
  //  this.props.deleteQuote(this.props.quote.id)
  // }

  // toggleFavorite = () => {
  //     this.setState({
  //        favorite: !this.state.favorite
  //     },

  //          () => {
                 
  //          let data = {favorite: this.state.favorite}
  //          fetch(`http://localhost:4000/quotes/${this.props.quote.id}`, {
  //          method: "PATCH",
  //          headers: {
  //          "Content-Type": "application/json",
  //          },
  //          body: JSON.stringify(data),
  //          })
  //          .then((r) => r.json())
  //          .then((quoteObj) => this.props.updateFavoriteOnState(quoteObj));
           
  //       }
  //     )   
    
  // }

  
  render() {
      console.log(this.toggleShowingFront)
      
      let {date, explanation, hdurl, title} = this.props.apod
      console.log(date)
        return (
          <Card className="apod_card">
              <button onClick={this.toggleShowingFront}>CLICK HERE FOR DETAILS</button>
             {this.state.showingFront?
               <Card.Content className="card_back">
                 <Image src={hdurl} alt={title}></Image>
                 <Card.Header className="quote">"{title}"</Card.Header>
               </Card.Content>
             :
             <Card.Content>
                <div className="author_info">
                 <Card.Header>{explanation}</Card.Header>
                </div>
             </Card.Content>  
            } 
          </Card>    
       )
      }
      
      
    }
    {/* // <div onClick={this.toggleShowingFront}>
    // {this.state.showingFront?
    //     <Card.Content>
    //       <Card.Header className="quote">"{title}"</Card.Header>
    //     </Card.Content>
    // :
    //     <Card.Content className="card_back">
    //       <Image className="author_img" src={hdurl} 
    //       // wrapped ui={false} alt={author}
    //       ></Image>
    //       <div className="author_info">
    //         <Card.Header>{explanation}</Card.Header>
    //         {/* <Card.Description><em>{source}</em></Card.Description> */}
    //       </div>
    //     </Card.Content>
    // }
    // </div> */}
    // <Card.Description className="likes">
    //   <button onClick={this.likeIncreaser}>♡</button>
    //   {likes}
    //   <button onClick={this.deleteHandler}>delete</button>
    //   {this.state.favorite ? <button onClick={this.toggleFavorite}>★</button> :<button onClick={this.toggleFavorite} >☆</button>}
    // </Card.Description>
            