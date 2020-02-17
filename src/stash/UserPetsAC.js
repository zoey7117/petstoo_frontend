import React from 'react'
import { Table, Icon, Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const UserPets = ({ pets, toggleAdopt }) => {
console.log(pets)
	function renderPets(){
		return pets.map(pet => {
			return (
				<Table.Row key={pet.id}>
					<Table.Cell>
						<Image src={pet.image_url} avatar />
						{pet.name}
					</Table.Cell>
					<Table.Cell onClick={() => toggleAdopt(pet.id)}>
						{pet.for_sale ? <Icon name="checkmark" color="green"/> : <Icon name="close" color="red"/>}
					</Table.Cell>
				</Table.Row>
			)
		})
	}
	return(
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Pet</Table.HeaderCell>
					<Table.HeaderCell>available for adoption</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{renderPets()}
			</Table.Body>
		</Table>
	)
}



export default UserPets
