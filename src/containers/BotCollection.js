import React, { Component } from "react";
import BotCard from "../components/BotCard.js"

class BotCollection extends Component {
  //your code here

  render() {
    const {bots} = this.props
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {bots.map(bot => <BotCard bot={bot}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
