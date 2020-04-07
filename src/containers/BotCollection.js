import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from "../components/BotSpecs"

class BotCollection extends Component {
  //your code here

  renderBot = () => {
    return this.props.char.map(x => <BotCard botCharacter={x} favBotChar = {this.props.favBotChar}/>)
  }

  render() {
        // console.log("What are these?")
        // console.log(this.props)
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBot()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
