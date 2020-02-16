import React from 'react'
import { Loader, Grid, Segment, Image, Form, Button } from 'semantic-ui-react'
import UserPets from "../components/users/UserPets"

class UserContainer extends React.Component {
	state = {
		// user: null,
		balance: 0,
	}
	// componentDidMount(){
	// 	const userId = this.props.match.params.id
	// 	fetch(`http://localhost:3001/api/v1/users/${userId}`)
	// 	.then(res => res.json())
	// 	.then(response => {
	// 		this.setState({user: response})
	// 	})
	// }

	toggleAdopt = (petId) => {
		fetch(`http://localhost:3000/api/v1/pets/${petId}/toggle_adopt`,{
			method: "PATCH"
		})
		.then(res => res.json())
		.then(console.log)
	// 	.then(response => {
	// 		let target = this.props.currentUser.pets.find(pet => pet.id === response.id)
	// 		let copy = [...this.props.currentUser.pets]
	//
	// 		let index = copy.indexOf(target)
	//
	// 		copy[index] = response
	//
	// 		this.props.updateUser({...this.props.currentUser, pets: copy})
	// 	})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/add_balance`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
				"Authorization": localStorage.getItem("token")
			},
			body: JSON.stringify({balance: this.state.balance})
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.updateUser(response)
				this.setState({
					balance: 0,
				})
			}
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

		const { currentUser } = this.props
		console.log(currentUser)

		if(currentUser){
			return (
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<strong>{currentUser.name}</strong>
							<p>Balance: ${currentUser.balance}</p>
							<p>{currentUser.bio}</p>
						</Segment>
							<Segment>
								<Form onSubmit={this.handleSubmit}>
									<Form.Field>
							      <label>Add to your balance!</label>
							      <input type="number" onChange={this.handleChange} name="balance" value={this.state.balance} placeholder='Additional Balance' />
							    </Form.Field>
							    <Button type='submit'>Add</Button>
								</Form>
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
