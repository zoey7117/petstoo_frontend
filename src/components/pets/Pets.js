import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import './Pets.css'

class Pets extends React.Component {
  constructor(props) {
    super()
    this.state = {
      front: true,
      hungry: true,
      on_adopt: true
    }
  }
  toggleCard = () => {
    this.setState((prevState) => {
      return {
        front: !prevState.front
      }
    })
  }

  hungryToggle = () => {
    this.setState((prevState) => {
      return {
        hungry: !prevState.hungry
      }
    })
  }

  adoptToggle = () => {
    this.setState((prevState) => {
      return {
        on_adopt: !prevState.on_adopt
      }
    })
  }

  render() {
    const adoptPet = this.props.adoptPet
    const allpets = this.props.pets
    console.log(this.state, this.props)

    return allpets.map(pet => {
      return (<Card key={pet.id} className='pet-card'>
        <Image src={pet.image} alt='' className='pet-image'/> {
          (this.state.front)
            ? (<> < Card.Content > <Card.Description>
              <h3>hi! i'm {pet.name}</h3>
              <h5>i'm {pet.age} years old.</h5>
              <hr></hr>
            </Card.Description>
              {
              (this.state.on_adopt)
                ? <Button className='adopt' size='mini' onClick={() => adoptPet(pet.id)}>Adopt me!</Button>
                : <Button className='adopt' onClick={this.adoptToggle}></Button>
            }<br/><hr></hr> < Button size = 'mini' onClick = {
              this.toggleCard
            } > flip to tend to me !</Button>
        </Card.Content>

      </>)
            : <Card.Content >
                {
                  (this.state.hungry)
                    ? <Button className='hungry' onClick={this.hungryToggle}>i'm stuffed, time for a nap!</Button>
                    : <Button className='hungry' onClick={this.hungryToggle}>i'm hungry, please feed me!</Button>
                }<br/>
                <hr></hr>
                <Button size='mini' onClick={this.toggleCard}>flip back!</Button>
              </Card.Content >
        }

      </Card >)
    })
  }
}

export default Pets
