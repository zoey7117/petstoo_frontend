import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends React.Component {
	state = {
		name: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		console.log('logging in',this.state)
		fetch("http://localhost:3000/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",

			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		// .then(console.log)
		.then(resp => {
			this.props.setCurrentUser(resp)
		})
		// 	if (response.errors){
		// 		// if there are erros, crap, the response is an error
		// 		alert(response.errors)
		// 	} else {
		// 		// if there are no errors, great, the response is a user object
		// })
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>name</label>
		      <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='name'autoComplete='off' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password'autoComplete='off' />
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default LoginForm
