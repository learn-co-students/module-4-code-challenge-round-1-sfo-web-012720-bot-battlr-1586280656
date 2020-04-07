import React, { Component } from "react";
import BotCard from "../components/BotCard"
import BotSpecs from "../components/BotSpecs"

class YourBotArmy extends Component {
  //your bot army code here...

  renderFavBot = () => {
    return this.props.fav.map(x => <BotCard botCharacter={x} favBotChar = {this.props.favBotChar}/>)
  }


  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderFavBot()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
