import React from 'react'
import { Fragment } from 'react'
import Pets from '../components/pets/Pets'



class PetContainer extends React.Component {
  state = {
    pets: [],
  }

  componentDidMount() {
    fetch("https://safe-waters-79087.herokuapp.com/https://fast-waters-11750.herokuapp.com/pets")
      .then(resp => resp.json())
    // .then(console.log)
      .then(resp => {
      this.setState({pets: resp})
    })
  }



  adoptPet = (petId) => {
    console.log(petId)
		fetch(`https://fast-waters-11750.herokuapp.com/pets/${petId}/adopt`, {
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Accepts": "application/json",
        'Access-Control-Allow-Origin': 'https://pets-adopt.netlify.com',
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


    console.log('props', this.props, 'state',this.state)
    return (
      	<Fragment>
      <Pets pets={pets} adoptPet={this.adoptPet}/>
    	</Fragment>
    )
  }
}

export default PetContainer
