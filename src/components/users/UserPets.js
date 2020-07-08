import React from 'react'
import { Card, Image } from 'semantic-ui-react'


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

	render(){
		const pets = this.props.pets		// const pets = currentUser.pets
		console.log('props',this.props, 'state',this.state, this.props.currentUser, this.props.owner)

		if(pets.length > 0){
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
		}
		else {
			return <h5><button onClick={event => window.location.href='/home'}>please adopt a pet</button></h5>

		}
	}
}



export default UserPets
