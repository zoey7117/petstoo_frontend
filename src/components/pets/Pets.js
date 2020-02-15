import React from 'react'
import PetCard from './PetCard'
import './Pets.css'
import { Card } from 'semantic-ui-react'


const Pets = props => {
  const allpets = props.pets
  console.log('allpets', allpets, 'props',props, props.adoptPet)
  const adoptPet = <PetCard adoptPet={props.adoptPet}/>
  const petCards = allpets.length > 0
    ? allpets.map(pet => <PetCard img="img" scr={pet.image} pet={pet} key={pet.id}/>)
    : []
  // console.log(petCards, props)
  return (<div>
    <Card.Group>
      {petCards}

    </Card.Group>
  </div>)
}

export default Pets
