import React, { Component } from 'react';
import History from "../history"
import "./component-css/navbar.css"
import "./component-css/navbar-animation.scss"
import Logo from "../logo.svg"
import ToggleFunction  from "./component-js/navbar.js"

class NavBar extends Component {
    
    componentDidMount(){
        ToggleFunction()
    }

    render() { 
        return (  
            
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo"> <div className="logo-content"> <img src={Logo} alt=""/></div></div>
                    <div className="links nav" id="nav"> 
                        <ul className="nav__menu" id="menu">
                            <li className="border-animation nav__item" onClick={() => History.push(`/`)} > <span className=" border-animation__inner nav__link"> Home </span></li>
                            <li className="border-animation nav__item" onClick={() => History.push(`/projects`)} >  <span className=" border-animation__inner nav__link"> Projects </span></li>
                            <li  className="border-animation nav__item" onClick={() => History.push(`/about`)} ><span className=" border-animation__inner nav__link"> About Me </span></li>
                            <li  className="border-animation nav__item" onClick={() => History.push(`/blog`)} ><span className=" border-animation__inner nav__link"> Blog </span></li>
                        </ul>
                        <a href="#nav" className="nav__toggle" role="button" aria-expanded="false" aria-controls="menu">
                            <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                <title>Toggle Menu</title>
                                <g>
                                    <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                                    <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                                    <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                                    <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                                    <circle className="menuicon__circle" r="23" cx="25" cy="25" />
                                </g>
                            </svg>
                        </a>
                        <div className="splash"></div>
                    </div>
                </div>
            
            </div >
            
            
            );}
}
 
export default NavBar
;