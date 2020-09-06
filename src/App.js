import React, { Component } from 'react';
import './App.css';
import { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import LoginForm from './components/users/LoginForm';
import SignupForm from './components/users/SignupForm';
import UserContainer from './containers/UserContainer';
import MobileNavbar from './components/mobileNavbar/MobileNavbar';
import Backdrop from './components/mobileNavbar/Backdrop';
import ToggleButton from './components/mobileNavbar/ToggleButton';
import Home from './components/home/Home';

class App extends Component {
	state = {
		mobileNavbarOpen: false,
		toggleButtonOpen: false,
		currentUser: null
	};
	toggleButtonClickHandler = () => {
		this.setState((prevState) => {
			return {
				mobileNavbarOpen: !prevState.mobileNavbarOpen
				// toggleButtonOpen: !prevState.toggleButtonOpen
			};
		});
	};

	toggleBackClickHandler = () => {
		this.setState({ mobileNavbarOpen: false, toggleButtonOpen: false });
	};

	logOut = () => {
		localStorage.removeItem('token');
		this.setState(
			{
				currentUser: null
			},
			() => {
				this.props.history.push('/home');
			}
		);
	};

	updateUser = (updatedUser) => {
		this.setState({
			currentUser: updatedUser
		});
	};

	componentDidMount(token) {
		token = localStorage.getItem('token');

		if (token) {
			// load up their shit
			// fetch('http://localhost:3000/api/v1/auto_login', {
			fetch(`https://petstoo-api.netlify.app/api/v1/auto_login`, {
				// fetch(`https://pacific-hollows-81769.herokuapp.com/api/v1/auto_login`, {
				headers: {
					Authorization: token
				}
			})
				.then((resp) => resp.json())
				.then((resp) => {
					this.setState({
						currentUser: resp
					});
				});
		}
	}

	setCurrentUser = (resp) => {
		this.setState(
			{
				currentUser: resp.user
			},
			() => {
				localStorage.setItem('token', resp.token);
				this.props.history.push(`/user`);
			}
		);
	};

	render() {
		// console.log(
		// 	this.state,
		// 	this.state.currentUser,
		// 	'routeProps',
		// 	this.routeProps,
		// 	'this.state.currentUser',
		// 	this.state.currentUser
		// );
		let backdrop;

		if (this.state.mobileNavbarOpen) {
			backdrop = <Backdrop click={this.toggleBackClickHandler} />;
		}
		return (
			<div className="app">
				<Navbar
					buttonClickHandler={this.toggleButtonClickHandler}
					currentUser={this.state.currentUser}
					logOut={this.logOut}
				/>
				<MobileNavbar
					show={this.state.mobileNavbarOpen}
					currentUser={this.state.currentUser}
					logOut={this.logOut}
				/>{' '}
				{backdrop}
				<ToggleButton show={this.state.toggleButtonOpen} />
				<Switch>
					<Route
						path="/user"
						render={(routeProps) => {
							return (
								<UserContainer
									{...routeProps}
									updateUser={this.updateUser}
									currentUser={this.state.currentUser}
								/>
							);
						}}
					/>
					<Fragment>
						<Route
							path="/login"
							render={(routeProps) => {
								return <LoginForm {...routeProps} setCurrentUser={this.setCurrentUser} />;
							}}
						/>

						<Route
							path="/signup"
							render={(routeProps) => {
								return <SignupForm {...routeProps} setCurrentUser={this.setCurrentUser} />;
							}}
						/>
						<Home updateUser={this.updateUser} currentUser={this.state.currentUser} />
					</Fragment>
				</Switch>
			</div>
		);
	}
}

export default App;
