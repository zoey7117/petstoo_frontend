import React from 'react'
import './ToggleButton.css'
import './MobileNavbar'

class ToggleButton extends React.Component {


    // className= 'toggle toggle-close' data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    //     className='toggle-button_line'
    //     className='toggle-button_line'
    //     className='toggle-button_line'


      // <div class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" />

    //



 showHideToggle = () => {
   let show
   if(this.props.show){

     show = <div className= 'toggle'>
       <div className='toggle-button_line'/>
       <div className='toggle-button_line'/>
       <div className='toggle-button_line'/>
     </div>
   } else {
     show = <div className= 'toggle'>
       <div className='toggle-button_line'/>
       <div className='toggle-button_line'/>
       <div className='toggle-button_line'/>
     </div>
   }
   return show
  }

  render (){
    console.log(this.props.click, this.props.show, this.props)
    return (

      <div>
        <button onClick={this.props.click}></button>
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
