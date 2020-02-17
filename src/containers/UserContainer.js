import React from 'react'
import { Loader, Grid, Segment, Button } from 'semantic-ui-react'
import UserPets from "../components/users/UserPets"

class UserContainer extends React.Component {


	toggleAdopt = (petId) => {
		fetch(`http://localhost:3000/api/v1/pets/${petId}/toggle_adopt`,{
			method: "PATCH"
		})
		.then(res => res.json())
		.then(response => {
			debugger
			let target = this.props.currentUser.pets.find(pet => pet.id === response.id)
			let copy = [...this.props.currentUser.pets]

			let index = copy.indexOf(target)

			copy[index] = response

			this.props.updateUser({...this.props.currentUser, pets: copy})
		})
	}

	getNewPet = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/get_pet`, {
			method: "POST",
      headers: {
        "Content-Type": "application/json",
      "Accepts": "application/json",
      "Authorization": localStorage.getItem("token")
			}
		})
		.then(res => res.json())
		.then(response => {
			this.props.updateUser(response)
		})
	}

	render(){
		console.log(this.props)

		const { currentUser } = this.props

		if(currentUser){
			return (
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<strong>{currentUser.name}</strong>

						</Segment>


					</Grid.Column>
					<Grid.Column width={9}>
						<Segment>
							<Button onClick={this.getNewPet}>Roll the dice!</Button>
							<UserPets pets={currentUser.pets} toggleAdopt={this.toggleAdopt}/>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		} else {
			return <Loader />
		}
	}
}

export default UserContainer
