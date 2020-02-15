import React from 'react'
import { Table, Icon, Image } from 'semantic-ui-react'

const UserPets = ({ pets, toggleAdopt }) => {

	function renderPets(){
		return pets.map(pet => {
			return (
				<Table.Row key={pet.id}>
					<Table.Cell>
						<Image src={pet.image_url} avatar />
						{pet.name}
					</Table.Cell>
					<Table.Cell onClick={() => toggleAdopt(pet.id)}>
						{pet.to_adopt ? <Icon name="checkmark" color="green"/> : <Icon name="close" color="red"/>}
					</Table.Cell>
				</Table.Row>
			)
		})
	}
	return(


			<Table.Body>
				{renderPets()}
			</Table.Body>
	)
}

export default UserPets
