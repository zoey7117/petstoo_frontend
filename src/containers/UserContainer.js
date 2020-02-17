import React from 'react'
import { Loader, Grid, Segment, Button } from 'semantic-ui-react'
import UserPets from "../components/users/UserPets"

class UserContainer extends React.Component {


	getNewPet = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/get_pet`, {
			method: "POST",
      headers: {
        "Content-Type": "application/json",
      "Accepts": "application/json",
      "Authorization": localStorage.getItem("token")
			}
		})
		.then(resp => resp.json())
		.then(resp => {
			this.props.updateUser(resp)
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
							hi {currentUser.name} !

						</Segment>


					</Grid.Column>
					<Grid.Column width={9}>
						<Segment>
							<Button onClick={this.getNewPet}>Roll the dice!</Button>
							<UserPets pets={currentUser.pets} />
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
