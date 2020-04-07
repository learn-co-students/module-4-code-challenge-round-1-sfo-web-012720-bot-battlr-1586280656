import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  
  genBots = () => {
    return this.props.bots.map(bot => <BotCard bot={bot} enlist={this.props.enlist} deactivateBot={this.props.deactivateBot}/>)
  }


  render() {
    console.log(this.props)
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.genBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
