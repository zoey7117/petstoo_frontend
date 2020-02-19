import React from 'react'

const Logout = () => {
  console.log('hi')
  debugger

  const handleSubmit = event => {
    event.preventDefault()
    logout()

  }

  const logout = () => {
    debugger
    fetch('http:localhost:3000/logout', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": localStorage.getItem("token")
      }
    })
    .then(resp => resp.json())
    .then(console.log)
    // .then(resp => {
    //   this.props.updateUser(resp)
    // })
  }

  return (
  <form onSubmit={handleSubmit}>

    <h3><button type="submit" className="button">log out</button></h3>
    </form>
  )
}

export default Logout
