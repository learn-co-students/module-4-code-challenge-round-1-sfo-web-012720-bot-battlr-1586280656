import React, { Component } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
	constructor() {
		super();
		this.state = {
			bots: [],
			botArmy: [],
		};
	}

	componentDidMount() {
		fetch('http://localhost:6001/bots')
			.then((resp) => resp.json())
			.then((bots) =>
				this.setState({
					bots,
				})
			);
	}

	addToArmy = (bot) => {
		if (!this.state.botArmy.includes(bot)) {
			this.setState((prevState) => {
				return {
					botArmy: [...prevState.botArmy, bot],
				};
			});
		}
	};

	removeFromArmy = (bot) => {
		this.setState((prevState) => {
			const newArmy = prevState.botArmy.filter((b) => b !== bot);
			return {
				botArmy: newArmy,
			};
		});
	};

	removeBot = (bot) => {
		const config = {
			method: 'delete',
		};

		fetch(`http://localhost:6001/bots/${bot.id}`, config);
	};

	render() {
		return (
			<div>
				<YourBotArmy
					handleRemove={this.removeBot}
					removeFromArmy={this.removeFromArmy}
					bots={this.state.botArmy}
				/>
				<BotCollection
					addToArmy={this.addToArmy}
					handleRemove={this.removeBot}
					bots={this.state.bots}
				/>
			</div>
		);
	}
}

export default BotsPage;
