import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class UserPets extends React.Component{
	constructor(props){
    super()
    this.state = {
      front:true,
      hungry:true
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

	// componentDidUpdate(prevProps) {
  //   // console.log('componentDidUpdate', this.props.trips.trips.length)
  //   if (this.props.currentUser.pets.length > prevProps.currentUser.pets.length) {
  //     this.props.updateUser(this.props.currentUser);
  //   }
  // }
	//
	// updateUser = (updatedUser) => {
	// 	this.setState({
	// 		currentUser: updatedUser
	// 	})
	// }

	render(){
		const pets = this.props.pets		// const pets = currentUser.pets
		console.log('props',this.props, 'state',this.state, this.props.currentUser, this.props.owner)

	// if(currentUser)	{
if(pets){
	return pets.map(pet => {
return(


		 <Card key={pet.id} className='pet-card'  >
			 <Image src={pet.image}  alt='' className='pet-image' />


			 { (this.state.front) ?
			 (<>
				 <Card.Content >
					 <Card.Description>
						 <h3>hi! i'm {pet.name}</h3>
							 <h5>i'm {pet.age} years old.</h5>
						 <hr></hr>
					 </Card.Description>

						 <button size='mini' onClick={this.toggleCard}>flip to tend to me</button>
				 </Card.Content>


				 </>) :
				 <Card.Content >
					 { (this.state.hungry) ? <button className='hungry' onClick={this.hungryToggle}>i'm stuffed, time for a nap</button> : <button className='hungry'  onClick={this.hungryToggle}>i'm hungry, please feed me</button> }<br/><hr></hr>
				 <button size='mini' onClick={this.toggleCard}>flip back</button>
				 </Card.Content >
			 }

		 </Card >
)
})
} else {
	return <h4><Link to={'/home'}>please adopt a pet!</Link></h4>
}
}
}



export default UserPets
