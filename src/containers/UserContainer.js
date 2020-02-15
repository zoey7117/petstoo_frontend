import React from 'react'
import { Card, Image, Button, Grid, Segment, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import UserPets from '../components/users/UserPets'

class UserContainer extends React.Component{

  toggleAdopt = (petId) => {
		fetch(`http://localhost:3000/api/v1/pets/${petId}/toggle_adopt`,{
			method: "PATCH"
		})
		.then(resp => resp.json())
		.then(resp => {
			let target = this.props.currentUser.pets.find(pet => pet.id === resp.id)
			let copy = [...this.props.currentUser.pets]

			let index = copy.indexOf(target)

			copy[index] = resp

			this.props.updateUser({...this.props.currentUser, pets: copy})
		})
	}


	render(){
		const { currentUser } = this.props
		// const pets = currentUser.pets
		console.log('props',this.props, 'state',this.state, this.props.currentUser, currentUser)

	if(currentUser)	{

		return(
      <Grid columns={2} centered>
  					<Grid.Column width={3}>
  						<Segment>
				hi {currentUser.name} !
      </Segment>

      </Grid.Column>
      <Grid.Column width={9}>
        <Segment>

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
