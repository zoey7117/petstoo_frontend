import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import LoginForm from './components/users/LoginForm'
import SignupForm from './components/users/SignupForm'
import UserContainer from './containers/UserContainer'
import PetContainer from './containers/PetContainer'
import MobileNavbar from "./components/mobileNavbar/MobileNavbar"
import Backdrop from "./components/mobileNavbar/Backdrop"
import ToggleButton from "./components/mobileNavbar/ToggleButton"



class App extends Component {
	state = {
		mobileNavbarOpen: false,
	toggleButtonOpen: false,
		currentUser: null
	}
	toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {
        mobileNavbarOpen: !prevState.mobileNavbarOpen,
        toggleButtonOpen: !prevState.toggleButtonOpen,
      }
    })
  }

  toggleBackClickHandler = () => {
    this.setState({mobileNavbarOpen: false, toggleButtonOpen: false})
  }

	logOut = () => {
		localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/home")
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
			fetch("https://fast-waters-11750.herokuapp.com/auto_login", {
				headers: {
					"Authorization": token,
					'Access-Control-Allow-Origin': 'https://inspiring-edison-c8c08c.netlify.com',

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
			// this.props.history.push(`/users${this.state.currentUser.id}`)
			this.props.history.push(`/`)

		})
	}

	render() {
		console.log(this.state, this.state.currentUser)
    let backdrop;

    if (this.state.mobileNavbarOpen) {
      backdrop = <Backdrop click={this.toggleBackClickHandler}/>;
    }
		return (<div className='App'>


			<Navbar buttonClickHandler={this.toggleButtonClickHandler} currentUser={this.state.currentUser} logOut={this.logOut}/>
      <MobileNavbar show={this.state.mobileNavbarOpen} currentUser={this.state.currentUser} logOut={this.logOut} /> {backdrop}
        <ToggleButton show={this.state.toggleButtonOpen}/>

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


			</div>

		);
	}
}

export default App;
