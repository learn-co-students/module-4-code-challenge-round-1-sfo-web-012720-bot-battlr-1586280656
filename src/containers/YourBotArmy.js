import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class YourBotArmy extends Component {
  mapOverBots = (props) => {
    return this.props.armyBots.map(bot => 
      <BotCard bot={bot} handleClick={this.props.removeABot}/> )
  }
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {this.mapOverBots()}
           
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
