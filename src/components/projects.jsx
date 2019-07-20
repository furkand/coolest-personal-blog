import React, { Component } from 'react';
import NavBar from "./navbar"
import "./component-css/projects.css"
import imageSquareOne from "../images/kare-1"
import imageSquareTwo from "../images/kare-2"
import imageSquarethree from "../images/kare-3"
import imageSquareFour from "../images/kare-4"
import imageSquareFive from "../images/kare-5"
import imageWideOne from "../images/ince-uzun-1"
import imageWideTwo from "../images/ince-uzun-2"
import imageTallOne from "../images/uzun-ince-1"
import imageTallTwo from "../images/uzun-ince-2"




class Projects extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.userHeight = window.innerHeight
        
    }
    render() { 
       
        
        return ( 
            <div>
                <NavBar/>
                    <div className="projects-container" style={{ height: 2*this.userHeight}}>
                      
                     <div className="projects-container element-6"><img src={imageTallOne} alt=""/></div>
                     <div className="projects-container element-1"> <img src={imageSquareOne} alt=""/></div>
                    <div className="projects-container element-9"><img src={imageWideTwo} alt=""/></div>
                    
                    <div className="projects-container element-2"><img src={imageSquareTwo} alt=""/></div>
                    
                    <div className="projects-container element-3"><img src={imageSquarethree} alt=""/></div>
                    <div className="projects-container element-4"><img src={imageSquareFour} alt=""/></div>
                    <div className="projects-container element-5"><img src={imageSquareFive} alt=""/></div>
                    
                    <div className="projects-container element-7"><img src={imageTallTwo} alt=""/></div>
                    <div className="projects-container element-8"><img src={imageWideOne} alt=""/></div>
                    
                   
                </div>
            </div> 
            );
    }
}
 
export default Projects;
