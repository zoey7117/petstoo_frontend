import React from 'react'
import './ToggleButton.css'
import './MobileNavbar'

class ToggleButton extends React.Component {

  showHideToggle = () => {
    if(this.props.show === false){
      return <div className= 'toggle toggle-close'>
        <div className='toggle-button_line'/>
        <div className='toggle-button_line'/>
        <div className='toggle-button_line'/>
      </div>


    } else {
      return <div className= 'toggle toggle-open'>
        <div className='toggle-button_line'/>
        <div className='toggle-button_line'/>
        <div className='toggle-button_line'/>
      </div>

    }

  }


  render (){
    console.log(this.props.click, this.props.show, this.props)
    return (

      <div>
        <button className='toggle' onClick={this.props.click}></button>
        {this.showHideToggle()}

      </div>
    )
    }
  }




//
//   $(".navbar-toggle").on("click", function () {
//     $(this).toggleClass("active");
// });
// console.log(props,this.state),






export default ToggleButton

// <div class="navbar navbar-inverse navbar-fixed-top">
//   <div class="navbar-header">
//     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//       <span class="icon-bar"></span>
//       <span class="icon-bar"></span>
//       <span class="icon-bar"></span>
//     </button>
//     <a class="navbar-brand" href="#">Animated Burger, Bootstrap</a>
//   </div>
//   <div class="navbar-collapse collapse">
//     <ul class="nav navbar-nav">
// 					      <li class="active"><a href="#">Home</a>
//       </li>
// 				    </ul>
//   </div>
// </div>
