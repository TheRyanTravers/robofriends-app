import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>  response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value })
	}

	render() {
		const filteredRobots= this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<Searchbox searchChange={this.onSearchChange}/>
					<Scroll>
						<Cardlist robots={filteredRobots}/>
					</Scroll>
				</div>				);
		}
    }
}

export default App;