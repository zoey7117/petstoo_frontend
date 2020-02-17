import React from 'react'
import { Loader, Segment, Button } from 'semantic-ui-react'
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
				<div>
					<Segment>
						hi {currentUser.name} ! <br/>
					<Button onClick={this.getNewPet}>Roll the dice!</Button>
					</Segment>
					<Segment>
						<UserPets pets={currentUser.pets} />
					</Segment>
				</div>
			)
		} else {
			return <Loader />
		}
	}
}

export default UserContainer
