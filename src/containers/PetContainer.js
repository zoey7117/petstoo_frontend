import React from 'react'
import { Fragment } from 'react'
import Pets from '../components/pets/Pets'



class PetContainer extends React.Component {
  state = {
    pets: [],
    currentUser: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/pets")
      .then(resp => resp.json())
    // .then(console.log)
      .then(resp => {
      this.setState({pets: resp})
    })
  }

  adoptPet = (petId) => {
    console.log(petId)
		fetch(`http://localhost:3000/api/v1/pets/${petId}/adopt`, {
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Accepts": "application/json"
			},
		})
		.then(res => res.json())
		.then(resp => {
			this.setState(prevState => {
				let adoptedPets = prevState.pets.filter(pet => pet.id !== resp.id)
        console.log(adoptedPets, pet => pet.id === resp.id, 'owner', pet => pet.owner)
				return {
					pets: adoptedPets
				}
			})
		})
	}

  render() {
    const {pets} = this.state
    return (
      	<Fragment>
      <Pets pets={pets} adoptPet={this.adoptPet}/>
    	</Fragment>
    )
  }
}

export default PetContainer
