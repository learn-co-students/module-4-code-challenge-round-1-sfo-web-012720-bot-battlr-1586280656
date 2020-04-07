import React, { Component } from "react";
import BotCollection from '../containers/BotCollection'

  const baseURL = "http://localhost:6001/bots"

  // GET: /bots
  // POST: /bots
  // DELETE: /bots/:id

class BotsPage extends Component {

  state = {
    bots: [],
  }

  componentDidMount() {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(botData => this.setState({bots: botData}))
  }

  render() {
    const {bots} = this.state
    return (
      <div><BotCollection bots={bots}/>
      </div>
    )
  }
}

export default BotsPage;
