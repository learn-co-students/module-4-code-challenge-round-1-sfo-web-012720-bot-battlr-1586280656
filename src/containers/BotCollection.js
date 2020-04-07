import React, { Component } from 'react';
import BotCard from '../components/BotCard';

class BotCollection extends Component {
	//your code here

	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.props.bots.map((bot) => (
						<BotCard
							handleRemove={this.props.handleRemove}
							handleClick={this.props.addToArmy}
							key={bot.id}
							bot={bot}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default BotCollection;
