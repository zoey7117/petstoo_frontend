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
import Home from './components/home/Home'



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
    let backdrop;

    if (this.state.mobileNavbarOpen) {
      backdrop = <Backdrop click={this.toggleBackClickHandler}/>;
    }
		return (<div className='App'>


			<Navbar buttonClickHandler={this.toggleButtonClickHandler}/>
      <MobileNavbar show={this.state.mobileNavbarOpen}/> {backdrop}
        <ToggleButton show={this.state.toggleButtonOpen}/>



			</div>

		);
	}
}

export default App;
