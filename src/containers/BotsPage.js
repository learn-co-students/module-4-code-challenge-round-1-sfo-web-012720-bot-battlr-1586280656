import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state = {
      botCharacter:[],
      botArmy:{}
    }
  }


  componentDidMount(){
    fetch('http://localhost:6001/bots') 
        .then(response => response.json())
        .then(data => this.setState({
            botCharacter: data
        }) )
    }
    


botArmy = (char) => {
  this.setState({
    botCharacter:char
  })
}


  render() {
    console.log(this.state)
    return (
      <div>
     <YourBotArmy fav= {this.state.botArmy} favBotChar={this.botCharacter}/>
     <BotCollection char={this.state.botCharacter} favBotChar={this.botCharacter}/>

      
      </div>
    )
  }
}

export default BotsPage;
