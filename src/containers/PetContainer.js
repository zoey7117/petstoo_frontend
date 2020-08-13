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

	abortController = new AbortController();

	componentDidMount() {
		this._isMounted = true;

		// fetch('http://localhost:3000/api/v1/pets')
		// fetch('https://pacific-hollows-81769.herokuapp.com/api/v1/pets')
		fetch(`https://petstoo-api.netlify.app/api/v1/pets`, {

			.then((resp) => resp.json())
			// .then(console.log)
			.then((resp) => {
				if (this._isMounted) this.setState({ pets: resp });
			});
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	adoptPet = (petId) => {
		if (this.props.currentUser) {
			console.log(petId);
			// fetch(`http://localhost:3000/api/v1/pets/${petId}/adopt`, {
				fetch(`https://petstoo-api.netlify.app/api/v1/pets/${petId}/adopt`, {
				// fetch(`https://pacific-hollows-81769.herokuapp.com/api/v1/pets/${petId}/adopt`, {
				method: 'POST',
				headers: {
					Authorization: localStorage.getItem('token'),
					'Content-Type': 'application/json',
					Accepts: 'application/json',
					'Access-Control-Allow-Origin': '*'
				}
			})
				.then((res) => res.json())
				.then((resp) => {
					const user = Object.assign({}, this.props.currentUser);

					user.pets.push(resp);
					this.state.updateUser(user);
					// }
					this.setState((prevState) => {
						let adoptedPets = prevState.pets.filter((pet) => pet.id !== resp.id);

						return {
							pets: adoptedPets
						};
					});
				});
		} else {
			alert('Please sign up or log in');
		}
	};
	// }

	render() {
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
