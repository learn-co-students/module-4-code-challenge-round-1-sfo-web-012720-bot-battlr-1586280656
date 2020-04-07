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
    const leftBots = this.state.armyBots.filter(bot => bot !== desertBot)
    this.setState({
      armyBots: leftBots
    })
  }

  deactivateBot = (bot) => {
    console.log('are we here yet')
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    const stillActiveBots = this.state.bots.filter(activeBot => activeBot !== bot)
    this.setState({
      bots: stillActiveBots
    })
  }

  render() {
    return <div>
      <YourBotArmy deEnlist={this.deEnlist} armyBots={this.state.armyBots} deactivateBot={this.deactivateBot} />
      <BotCollection enlist={this.enlist} bots={this.state.bots} deactivateBot={this.deactivateBot}/>
    </div>;
  }
}

export default BotsPage;
