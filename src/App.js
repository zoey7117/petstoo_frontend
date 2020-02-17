import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Navbar from './components/navbar/Navbar'
import LoginForm from './components/users/LoginForm'
import SignupForm from './components/users/SignupForm'
import UserContainer from './containers/UserContainer'
import PetContainer from './containers/PetContainer'

class App extends Component {
	state = {
		currentUser: null
	}

	logOut = () => {
		localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/login")
		})
	}



	updateUser = (updatedUser) => {
		this.setState({
			currentUser: updatedUser
		})
	}

	componentDidMount(token){
		token  = localStorage.getItem("token")

		if (token){
			// load up their shit
			fetch("http://localhost:3000/api/v1/auto_login", {
				headers: {
					"Authorization": token
				}
			})
			.then(resp => resp.json())
      .then(resp => {
        this.setState({
          currentUser: resp
        })
      })
	// 		.then((response) => {
	// 			if (response.errors) {
	// 				alert(response.errors)
	// 			} else {
	// 				this.setState({
	// 					currentUser: response
	// 				})
	// 			}
			// })
		}
	}

	setCurrentUser = (resp) => {
		this.setState({
			currentUser: resp.user
		}, () => {
			localStorage.setItem("token", resp.token)
			this.props.history.push(`/`)
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
			<Grid>
				<Navbar currentUser={this.state.currentUser} logOut={this.logOut}/>
				<Grid.Row centered>
					<Switch>
						<Route path="/user" render={(routeProps) => {
						return <UserContainer {...routeProps} updateUser={this.updateUser} currentUser={this.state.currentUser}/>
					}} />
						<Route path="/home" component={PetContainer} />
            <Route path="/login" render={(routeProps) => {
							return <LoginForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
						<Route path="/signup" render={(routeProps) => {
							return <SignupForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
					</Switch>
				</Grid.Row>
			</Grid>
			</div>

		);
	}
}

export default App;
