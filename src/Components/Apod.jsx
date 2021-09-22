import { tsParenthesizedType } from '@babel/types';
import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class Apod extends Component {
  state = {       
    showingFront : true,
    like: false,
    delete: false
  }

  //****************************************The below toggles the state of the card from front faceing to back facing******************* */
  toggleShowingFront = () => {
    this.setState({
      showingFront: !this.state.showingFront
    })
  }
  


  //**************************************The below toggles the state of the like of the particular card****************************** */

  toggleLike = () => {
      this.setState({
         like: !this.state.like
         }
      )     
  }

  //**************************************The below deletes a card from the page  *********************************/
  toggleDelete = () => {
    this.setState({
       delete: !this.state.delete
       }
    )     
}


  
  render() {
      console.log(this.props)
      
      let {date, explanation, url, title} = this.props.apod
      console.log(date)
           if(this.state.delete){

          return(null)
          }
        
           return (
        
            <Card className="apod_card">
              <button onClick={this.toggleShowingFront}>CLICK HERE FOR DETAILS</button>
             {this.state.showingFront?
               <Card.Content >
                 <Image src={url} alt={title}></Image>
                 <Card.Header className="quote">{title}</Card.Header>
                 <Card.Description className="quote">Date: {date}</Card.Description>
                   <Card.Description className="author_info">
                     {this.state.like ? <button onClick={this.toggleLike}>🖤</button> :<button onClick={this.toggleLike} >♡</button>}
                     <button onClick={this.toggleDelete}>delete</button>
                   </Card.Description>
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
