// import React from 'react'
//   import { Loader, Grid, Segment, Image, Form, Button } from 'semantic-ui-react'
//   import UserPets from "../components/users/UserPets"
//
//   class UserContainer extends React.Component {
//
//
//
//
//
//
//
//
//   	render(){
//
//   		const { currentUser } = this.props
//
//   		if(currentUser){
//   			return (
//   				<Grid columns={2} centered>
//   					<Grid.Column width={3}>
//   						<Segment>
//   							<Image src={currentUser.avatar_url} fluid />
//   							<strong>{currentUser.username}</strong><br/>
//   							<strong>{currentUser.name}</strong>
//   							<p>Balance: ${currentUser.balance}</p>
//   							<p>{currentUser.bio}</p>
//   						</Segment>
//   							<Segment>
//   								<Form onSubmit={this.handleSubmit}>
//   									<Form.Field>
//   							      <label>Add to your balance!</label>
//   							      <input type="number" onChange={this.handleChange} name="balance" value={this.state.balance} placeholder='Additional Balance' />
//   							    </Form.Field>
//   							    <Button type='submit'>Add</Button>
//   								</Form>
//   							</Segment>
//
//   					</Grid.Column>
//   					<Grid.Column width={9}>
//   						<Segment>
//   							<Button onClick={this.getNewBot}>Roll the dice!</Button>
//   							<UserBots bots={currentUser.bots} toggleSale={this.toggleSale}/>
//   						</Segment>
//   					</Grid.Column>
//   				</Grid>
//   			)
//   		} else {
//   			return <Loader />
//   		}
//   	}
//   }
//
//   export default Profile
//
// //   }
// }
//
// export default UserContainer
