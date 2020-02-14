import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class SignupForm extends React.Component {

  state = {
    name: "",
    password: "",
    passwordConfirmation: "",
  }

  handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


  createUser = () => {
    console.log('in signupform')
		fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
    .then(res => res.json())
		.then((resp) => {
			if (resp.errors){
				alert(resp.errors)
			} else {
				this.props.setCurrentUser(resp)
			}
		})
	}

  handleSubmit = () => {
  	if(this.state.password === this.state.passwordConfirmation){
  		this.createUser()
  	} else {
  		alert("Passwords don't match!")
  	}
  }

  render(){
    console.log(this.props, this.state)
    return(

        <Form onSubmit={this.handleSubmit}>
      	    <Form.Field>
      	      <label>Name</label>
      	      <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='Name'autoComplete='off' />
      	    </Form.Field>
      	    <Form.Field>
      	      <label>Password</label>
      	      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' autoComplete='off'/>
      	    </Form.Field>
      	    <Form.Field>
      	      <label>Password Confirmation</label>
      	      <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Password Confirmation'autoComplete='off' />
      	    </Form.Field>
      	    <Button type='submit'>Submit</Button>
      	  </Form>

    )
  }

}

export default SignupForm
