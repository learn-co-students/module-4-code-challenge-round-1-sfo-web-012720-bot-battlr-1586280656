import React, { Component } from "react";
import BotCard from "../components/BotCard.js"

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    const {bots, handleClick} = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {bots.map(bot => <BotCard bot={bot} key={bot.id} handleClick={handleClick}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
