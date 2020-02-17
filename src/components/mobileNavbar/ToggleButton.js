import React from 'react'
import './ToggleButton.css'
import './MobileNavbar'

const ToggleButton = props => (


  <button className='toggle' onClick={props.click}>
    <div className='toggle-button_line'/>
    <div className='toggle-button_line'/>
    <div className='toggle-button_line'/>
</button>

)



export default ToggleButton
