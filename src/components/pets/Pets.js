import React from 'react'
import PetCard from './PetCard'
import './Pets.css'

const Pets = props => {
  const allpets = props.pets
  console.log('allpets', allpets)
  const petCards = allpets.length > 0
    ? allpets.map(pet => <PetCard img="img" scr={pet.image} pet={pet} key={pet.id}/>)
    : []
  console.log(petCards, props)
  return (<div>
    {petCards}
  </div>)
}

export default Pets
