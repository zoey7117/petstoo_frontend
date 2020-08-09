import React from 'react';
import Pet from '../pets/Pet';

class UserPets extends React.Component {
	renderPets() {
		return this.props.pets.map((pet) => <Pet key={pet.id} pet={pet} />);
	}

	render() {
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
