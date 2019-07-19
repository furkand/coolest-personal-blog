import React, { Component } from 'react';
import Profil from "../profil.jpg"
import "./component-css/about.css"
import NavBar from "./navbar"


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar/>
                <div>
                    <div className="about-container">
                        <div className="about-photo"> <img src={Profil} alt=""/></div>
                        <div className="bio-tittle"><h1 className="bio-tittle">About Me</h1></div>
                        <div className="bio-container"> 
                            <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                        </div>
                    
                    </div>
                </div> 
            </React.Fragment>
            );
    }
}
 
export default About;