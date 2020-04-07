import React, { Component } from "react";
import BotCard from '../components/BotCard.js'


class BotCollection extends Component {
  mapOverBots = (props) => {
    return this.props.allBots.map(bot => 
      <BotCard bot={bot} handleClick={this.props.addBotToArmy}/> )
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
         {this.mapOverBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
