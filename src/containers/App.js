import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
//import {robots} from './robots.js'
import '../containers/App.css';

class App extends Component  {
	constructor(){
		super();
		this.state ={
			robots:[], //robots,
			searchfield:''
		}
	}
	//To online data fetching
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=> this.setState({robots: users}));
		
	}//till here
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })		
		}
	
	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length === 0){
			return <h1 className='f1'>Loading...</h1>
		}else{	
			return(
			<div className = 'tc'>
			<h1 className='f2'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
				<CardList robots={filteredRobots}/>
				</ErrorBoundary>
			</Scroll>
		</div>	);
		}
	}
}
export default App;