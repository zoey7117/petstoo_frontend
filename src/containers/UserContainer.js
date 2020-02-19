import React from 'react'
import { Loader, Segment } from 'semantic-ui-react'
import UserPets from "../components/users/UserPets"

class UserContainer extends React.Component {



	render(){
		console.log(this.props, 'props', this.props.currentUser)

		const { currentUser } = this.props

		if(currentUser){
			return (
				<div>
					<Segment>
						hi {currentUser.name}! <br/>
					<p>please refresh to update pets</p>
					</Segment>
					<Segment>
						<UserPets pets={currentUser.pets} currentUser={currentUser}/>
					</Segment>
				</div>
			)
		} else {
			return <Loader />
		}
	}
}

export default UserContainer
