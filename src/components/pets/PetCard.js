import React from 'react'

import { Card, Image, Button } from 'semantic-ui-react'






class PetCard extends React.Component {

  state = {
  front:true,
  hungry:true,
}

toggleCard = ()=>{
  this.setState((prevState) =>{
    return {front:!prevState.front}
  })
}


hungryToggle =()=> {
  this.setState((prevState) =>{
    return {hungry:!prevState.hungry}
  })
}








render() {
  console.log('pet', this.props)
  const { pet } = this.props

  return(
    <Card className='pet-card' data-action='this-pet' data-id={pet.id} >
      <Image src={pet.image}  alt='' className='pet-image' />
      { (this.state.front) ?
      (<>
        <Card.Content >
          <Card.Description>
          <h3>hi! i'm {pet.name}</h3>
            <h5>i'm {pet.age} years old.</h5>
          <hr></hr>


          </Card.Description>
          <Button size='mini' onClick={this.toggleCard}>flip to tend to me!</Button>
          </Card.Content>


        </>) :
        <Card.Content >
          { (this.state.hungry) ? <Button className='hungry' onClick={this.hungryToggle}>i'm stuffed, time for a nap!</Button> : <Button className='hungry'  onClick={this.hungryToggle}>i'm hungry, please feed me!</Button> }<br/><hr></hr>
              <Button size='mini' onClick={this.toggleCard}>flip back!</Button>

        </Card.Content >
      }

    </Card >

)

}
}
export default PetCard
