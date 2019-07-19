import React, { Component } from 'react';
import History from "../history"
import "./component-css/navbar.css"
import "./component-css/navbar-animation.scss"
import Logo from "../logo.svg"

class NavBar extends Component {
    
    
    render() { 
        return (  
            
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo"> <div className="logo-content"> <img src={Logo} alt=""/></div></div>
                    <div className="links"> 
                        <ul>
                            <li className="border-animation" onClick={() => History.push(`/`)} > <span className=" border-animation__inner"> Home </span></li>
                            <li className="border-animation" onClick={() => History.push(`/projects`)} >  <span className=" border-animation__inner"> Projects </span></li>
                            <li  className="border-animation" onClick={() => History.push(`/about`)} ><span className=" border-animation__inner"> About Me </span></li>
                            <li  className="border-animation" onClick={() => History.push(`/blog`)} ><span className=" border-animation__inner"> Blog </span></li>
                        </ul>
                    </div>
                </div>
            
            </div >
            
            
            );}
}
 
export default NavBar
;