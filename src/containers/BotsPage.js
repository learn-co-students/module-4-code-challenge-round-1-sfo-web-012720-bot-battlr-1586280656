import React, { Component } from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

  const baseURL = "http://localhost:6001/bots"

  // GET: /bots
  // POST: /bots
  // DELETE: /bots/:id

class BotsPage extends Component {

  state = {
    bots: [],
    armyBots: [],
  }

  componentDidMount() {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(botData => this.setState({bots: botData}))
  }


  addToArmy = (bot) => {
    if (!this.state.armyBots.includes(bot) && !this.deleteBot) {
      this.setState(prevState => (
        {armyBots: [...prevState.armyBots, bot]}))
    }
  }


  removeFromArmy = (bot) => {
    const newBots = this.state.armyBots.filter(b => b !== bot)
    this.setState({armyBots: newBots})
  }

  deleteBot = (bot) => {
    fetch(`${baseURL}/${bot.id}`, {
      method: 'DELETE'
    })
    const botsAfterDelete = this.state.bots.filter(b => b !== bot)
    this.setState({bots: botsAfterDelete})
  }

  render() {
    const {bots, armyBots} = this.state
    return (
      <div>
        <YourBotArmy bots={armyBots} handleClick={this.removeFromArmy} handleDeleteButton={this.deleteBot}/>
        <BotCollection bots={bots} handleClick={this.addToArmy} handleDeleteButton={this.deleteBot}/>
      </div>
    )
  }
}

export default BotsPage;
