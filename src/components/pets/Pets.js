import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Card, Image } from 'semantic-ui-react';
import './Pets.css';
import './Pet.js';

class Pets extends React.Component {
	constructor({ updateUser, currentUser }) {
		super();
		this.state = {
			on_adopt: true,
			currentUser: currentUser,
			updateUser: updateUser,
			redirect: false
		};
	}

	setRedirect = () => {
		this.setState({ redirect: true });
	};
	renderRedirect = () => {
		if (this.props.currentUser && this.state.redirect) {
			return <Redirect to={`/user`}>{this.props.currentUser.name}</Redirect>;
		}
	};

	adoptToggle = () => {
		this.setState((prevState) => {
			return {
				on_adopt: !prevState.on_adopt
			};
		});
	};

	render() {
		console.log(this.props.currentUser);
		const adoptPet = this.props.adoptPet;
		const allpets = this.props.pets;

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
								<div>
									{this.renderRedirect()}
									<button
										className="adopt"
										size="mini"
										onClick={() => {
											adoptPet(pet.id);
											{
												this.setRedirect();
											}
										}}
									>
										Adopt me!
									</button>
								</div>
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
