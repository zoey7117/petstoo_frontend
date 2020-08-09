import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Pets.css';
import './Pet.js';

class Pets extends React.Component {
	constructor(props) {
		super();
		this.state = {
			on_adopt: true
		};
	}

	adoptToggle = () => {
		this.setState((prevState) => {
			return {
				on_adopt: !prevState.on_adopt
			};
		});
	};

	render() {
		const adoptPet = this.props.adoptPet;
		const allpets = this.props.pets;
		// console.log(this.state, this.props);

		return allpets.map((pet) => {
			return (
				<Card key={pet.id} className="pet-card">
					<Image src={pet.image} alt="" className="pet-image" />{' '}
					{
						<Card.Content>
							{' '}
							<Card.Description>
								<h3>hi! i'm {pet.name}</h3>
								<h5>i'm {pet.age} years old.</h5>
								<hr />
							</Card.Description>
							{this.state.on_adopt ? (
								<button className="adopt" size="mini" onClick={() => adoptPet(pet.id)}>
									Adopt me!
								</button>
							) : (
								<button className="adopt" onClick={this.adoptToggle} />
							)}
							<br />
						</Card.Content>
					}
				</Card>
			);
		});
	}
}

export default Pets;
