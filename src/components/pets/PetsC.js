import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Pets = ({ pets, adoptPet }) => {

	function renderPets(){
		return pets.map(pet => {
			return (
				<Card key={pet.id}>
					<Card.Content>
						<Image src={pet.image_url} floated='right' size='small'/>
		        <Card.Header>{pet.name}</Card.Header>
		        <Card.Meta>Owner: <Link to={`/users/${pet.owner.id}`} >{pet.owner.username}</Link></Card.Meta>
		        <Card.Description>
							<p>Price: ${pet.price}</p>
							<Button color="green" onClick={()=> adoptPet(pet.id)}>Buy {pet.name}!</Button>
		        </Card.Description>
		      </Card.Content>
				</Card>
			)
		})
	}
	return(
		<Card.Group centered>
	      {renderPets()}
	  </Card.Group>
	)
}

export default Pets
