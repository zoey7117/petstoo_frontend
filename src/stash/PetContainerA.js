import React from 'react'
import Pets from '../components/pets/Pets'


class PetContainer extends React.Component {
  state = {
    pets: []
  }
  //

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/pets")
      .then(resp => resp.json())
    // .then(console.log)
      .then(resp => {
      this.setState({pets: resp})
    })
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

  render() {
    const {pets} = this.state

    console.log('props', this.props, 'state',this.state)
    return (<div >

      <Pets pets={pets} adoptPet={this.adoptPet}/>

    </div>)
  }
}

export default PetContainer
