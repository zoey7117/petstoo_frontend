import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserPets extends React.Component{
	constructor(props){
    super()
    this.state = {
      front:true,
      hungry:true,
    }
  }
	toggleCard = ()=>{
	  this.setState((prevState) =>{
	    return {front:!prevState.front}
	  })
	}

	hungryToggle =()=> {
	  this.setState((prevState) => {
	    return {hungry:!prevState.hungry}
	  })
	}

	render(){
		const toggleAdopt = this.props.adoptPet
		const pets = this.props.pets		// const pets = currentUser.pets
		console.log('props',this.props, 'state',this.state, this.props.currentUser)

	// if(currentUser)	{

		return(
			<div>
				hi!
			</div>


	)

}
}
// }



export default UserPets
