import React from 'react'

import { Link } from 'react-router-dom'
import './NavBar.css'
import ToggleButton from '../mobileNavbar/ToggleButton'



class NavBar extends React.Component {
  constructor(props){
    super()
  }



 render () {
   console.log(this.props)




  return (<div>
    <nav id="navbar">
  <Link to="/" className='navbar-logo'>Adopt a Pet!</Link>
  <div className='spacer'/>
  <div className='navbar-words'>
    <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/login" >Log In</Link></li>
      <li><Link to="/signup" >Sign Up</Link></li>
      <li><Link to="/logout"  >Log Out</Link></li>
    </ul>

    </div>
    <div className='mobile-navbar-button'>
    <ToggleButton click={this.props.buttonClickHandler}/>
    </div>

    </nav>






  </div>);
}
}


export default NavBar;
