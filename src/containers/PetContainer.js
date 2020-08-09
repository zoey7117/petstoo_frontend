import React from 'react';
import { Fragment } from 'react';
import Pets from '../components/pets/Pets';

class PetContainer extends React.Component {
	constructor({ updateUser, currentUser }) {
		super();
		this.state = {
			pets: [],
			currentUser: currentUser,
			updateUser: updateUser
		};
	}
	_isMounted = false;

	componentDidMount() {
		this._isMounted = true;

		// fetch('http://localhost:3000/api/v1/pets')
		fetch('https://pacific-hollows-81769.herokuapp.com/api/v1/pets')
			.then((resp) => resp.json())
			// .then(console.log)
			.then((resp) => {
				this.setState({ pets: resp });
			});
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	//if go live need if/else statement here if not signed in and click alert appears
	adoptPet = (petId) => {
		console.log(petId);
		// fetch(`http://localhost:3000/api/v1/pets/${petId}/adopt`, {
		fetch(`https://pacific-hollows-81769.herokuapp.com/api/v1/pets/${petId}/adopt`, {
			method: 'POST',
			headers: {
				Authorization: localStorage.getItem('token'),
				'Content-Type': 'application/json',
				Accepts: 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		})
			.then((res) => res.json())
			// .then(console.log);
			.then((resp) => {
				// console.log('this.props.currentUser', this.props.currentUser, 'this.currentUser', this.currentUser);
				// if (this.currentUser.pets.length) {
				const user = Object.assign({}, this.props.currentUser);
				// console.log('user', user, 'this.props.updateUser()', this.props.updateUser());
				user.pets.push(resp);
				this.state.updateUser(user);
				// }
				this.setState((prevState) => {
					let adoptedPets = prevState.pets.filter((pet) => pet.id !== resp.id);
					// console.log(adoptedPets, (pet) => pet.id === resp.id, 'owner', (pet) => pet.owner_id);
					return {
						pets: adoptedPets
					};
				});
			});
	};

	render() {
		console.log('this.props', this.props, 'this.state', this.state);
		const { pets } = this.state;
		return (
			<Fragment>
				<Pets
					pets={pets}
					adoptPet={this.adoptPet}
					updateUser={this.props.updateUser}
					currentUser={this.props.currentUser}
				/>
			</Fragment>
		);
	}
}

export default PetContainer;
