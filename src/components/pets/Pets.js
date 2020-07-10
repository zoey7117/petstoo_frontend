import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './Pets.css';

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
		console.log('this.state', this.state, 'this.props', this.props);

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
								<Button className="adopt" size="mini" onClick={() => adoptPet(pet.id)}>
									Adopt me!
								</Button>
							) : (
								<Button className="adopt" onClick={this.adoptToggle} />
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
