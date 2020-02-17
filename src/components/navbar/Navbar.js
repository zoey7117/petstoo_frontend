import React from 'react'
import {Grid, Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import ToggleButton from '../mobileNavbar/ToggleButton'

class Navbar extends React.Component {

  render() {

    return (<nav id="navbar">
      <Link to="/" className='navbar-logo'>Adopt a Pet!</Link>
      <div className='spacer'/>
      <div className='navbar-words'>


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
                    <Link onClick={this.props.logOut}>
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
      </div>
    </nav>)
  }
}

export default Navbar
