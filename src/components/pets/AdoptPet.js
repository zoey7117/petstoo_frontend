import React from 'react'
import PetCard from './PetCard'


class AdoptPet extends React.Component {
  state = {
    pets: []
  }


  adoptPet = (petId) => {
    fetch(`http://localhost:3000/api/v1/pets/${petId}/adopt`, {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
    .then(res => res.json())
    .then(resp => {
      this.setState(prevState => {
        let adoptedPets = prevState.pets.filter(pet => pet.id !== resp.id)
        return {
          pets: adoptedPets
        }
      })
    })
  }
  render(){
    return(
      <div>
      <PetCard adoptPet={this.adoptPet}/>
      </div>
    )
  }
}
export default AdoptPet
