import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {

  render() {
  console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
           <h1>Your Bot Army</h1>
          {this.props.armyBots.map(armybot => <BotCard bot={armybot} enlist={this.props.deEnlist} deactivateBot={this.props.deactivateBot}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
