import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Pet from '../pets/Pet';
// '../components/pets/Pets'

class UserPets extends React.Component {
	renderPets() {
		return this.props.pets.map((pet) => <Pet key={pet.id} pet={pet} />);
	}

	render() {
		// const { pets } = this.props.pets;
		console.log(
			this.props,
			'this.props.pets',
			this.props.pets,
			'this.props.currentUser',
			this.props.currentUser,
			'this.props.currentUser.pets',
			this.props.currentUser.pets
		);
		// const pets = this.props.pets; // const pets = currentUser.pets
		// // console.log('props',this.props, 'state',this.state, 'currentUser', this.props.currentUser, 'currentUserPets', this.props.currentUser.pets)
		// console.log('props',this.props, 'state',this.state, 'currentUser', this.props.currentUser, 'currentUserPets', this.props.currentUser.pets)
		if (this.props.currentUser.pets.length === 0) {
			return (
				<h5>
					<button onClick={(event) => (window.location.href = '/home')}>please adopt a pet</button>
				</h5>
			);
		} else {
			return <div>{this.renderPets()}</div>;
		}
	}
}

export default UserPets;
