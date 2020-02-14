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

  render() {

    console.log(this.props, this.state)
    return (<div >

      <Pets pets={this.state.pets}/>

    </div>)
  }
}

export default PetContainer
