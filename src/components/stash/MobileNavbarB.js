import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavbar.css'


class MobileNavbar extends React.Component {


render(){

  let mobileClasses = ['mobile-navbar']
  if(this.props.show) {
    mobileClasses = ['mobile-navbar open']
    console.log('hi')
  }


return (
  <nav className={mobileClasses}>
    {
      this.props.currentUser
        ? <div>
        <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
            <li>
              <Link to={`/user`}>
                {this.props.currentUser.name}
              </Link>
            </li>
            <li>
              <Link to={'/logout'} onClick={this.props.logOut}>
                Log out
              </Link>
            </li>
          </ul>
          </div>

        : <div>
          <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
          </div>
    }

  </nav>
)

}
}

export default MobileNavbar
