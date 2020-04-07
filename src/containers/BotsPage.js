import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  state = {
    bots: [],
    armyBots: []
  }

  componentDidMount(){
    fetch(`http://localhost:6001/bots`)
    .then(resp => resp.json())
    .then(bots => this.setState({bots}))
  }

  enlist = (bot) => {
    if (!this.state.armyBots.includes(bot)){
      this.setState(prevState => ({
        armyBots: [...prevState.armyBots, bot]
      }))
    }
  }

  deEnlist = (desertBot) => {
    const leftBots = this.state.bots.filter(bot => bot !== desertBot)
    this.setState({
      armyBots: leftBots
    })
  }

  render() {
    return <div>
      <YourBotArmy armyBots={this.state.armyBots} enlist={this.enlist} deEnlist={this.deEnlist}/>
      <BotCollection enlist={this.enlist} bots={this.state.bots} />
    </div>;
  }
}

export default BotsPage;
