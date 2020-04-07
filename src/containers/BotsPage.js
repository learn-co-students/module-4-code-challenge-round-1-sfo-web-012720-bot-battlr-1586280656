import React, { Component } from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends Component {
  constructor(){
    super();
    this.state = {
      allBots: [],
      armyBots:[]
    }
  }
  //your code here
  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then((resp) => resp.json())
    .then((botData) => 
    this.setState({
      allBots: botData
    }))
  }

  addBotToArmy = (bot)=> {
    console.log("you clicked add bot")
   if (!this.state.armyBots.includes(bot)){
    this.setState(prevState => ({
      armyBots: [...prevState.armyBots, bot]
    }))
   }
  }

  removeABot = (bot) => {
    console.log("you removed bot")
    let newArray = this.state.armyBots.filter(robot =>
      bot !== robot)
      this.setState({
        armyBots: newArray
      })

  }

  deleteBot = (bot) => {
    console.log("you clicked the red x")
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then((resp) => resp.json())
    .then((data) =>  
     {let newArray = this.state.allBots.filter(robot =>
      bot !== robot)
      this.setState({
        allBots: newArray
      })
    }


    )
    

  }
  //start here with your code for step one

  render() {
    return (
    <div>
    <YourBotArmy armyBots={this.state.armyBots} removeABot={this.removeABot} deleteBot={this.deleteBot} />
    <BotCollection allBots={this.state.allBots} addBotToArmy={this.addBotToArmy} deleteBot={this.deleteBot}/> 
    
    
    </div>
    )
  }
}

export default BotsPage;
