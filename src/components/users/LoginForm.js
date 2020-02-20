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
		fetch("http://localhost:3000/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(resp => {
			if (resp.errors){
				// if there are erros, crap, the resp is an error
				alert(resp.errors)
			} else {
				// if there are no errors, great, the resp is a user object
				this.props.setCurrentUser(resp)
			}
		})
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>name</label>
		      <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='name'autoComplete='off' />
		    </Form.Field>
		    <Form.Field>
		      <label>password</label>
		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='password'autoComplete='off' />
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default LoginForm
