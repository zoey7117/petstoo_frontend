import React from 'react'

class Logout extends React.Component {


  logout = () => {
    localStorage.clear('token')
  }

  render() {

    return <button onClick={this.logout}>log out</button>

  }
}

export default Logout
