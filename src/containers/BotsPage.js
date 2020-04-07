import React, { Component } from "react";

import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends Component {

  state = {
    bots: [],
    yourBots: []
  }
  
  componentDidMount() {
    fetch("http://localhost:6001/bots")
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  addBot = (bot) => {
    if(!this.state.yourBots.includes(bot)) {
      this.setState(prevState => ({
        yourBots: [...prevState.yourBots, bot]
      }))
    }
  }

  removeBot = (bot) => {
    const newBots = this.state.yourBots.filter(b => b !== bot)
    this.setState({
      yourBots: newBots
    })
  }

  deleteBot = (botId) => {
    fetch(`http://localhost:6001/bots/${botId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }      
    })
    
    const newBots = this.state.bots.filter(b => b.id !== botId)
    const newYourBots = this.state.yourBots.filter(b => b.id !== botId)
    
    this.setState({
      bots: newBots,
      yourBots: newYourBots
    })
  }

  render() {
    return <div>
      <YourBotArmy yourBots={this.state.yourBots} removeBot={this.removeBot} deleteBot={this.deleteBot} />
      <BotCollection bots={this.state.bots} addBot={this.addBot} deleteBot={this.deleteBot} />
    </div>;
  }
}

export default BotsPage;
