import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
	handleOnClick = () => {
		this.props.dispatch({
//dispatch is automatically provided by a prop if no arg2 provided (mapsDispatchToProps)
			type: 'INCREASE_COUNT',
		});
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.clicks}</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { clicks: state.clicks };
}
//specifies which piece of state we want to provide to comp
//clicks is a prop

export default connect(mapStateToProps)(App);
//connect function is synced up to store, listening to each change in state

