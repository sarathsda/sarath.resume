import React from "react";
import "./styles/Home.css";
import {NavLink} from "react-router-dom"

function Home(props){
    return(
        <section id="home" className="d-flex align-items-center">
            < div className="container d-flex flex-column align-items-center shadow-lg p-4">
                <h1 className="display-1 "><i>Sarath</i></h1>

                <h3 className="display-6 text-center">Im a professional MERN Stack Developer</h3>

                <NavLink to={'/about'} className="btn btn-outline-info">
                    <i className="bi bi-person-fill pe-2"></i>About me
                </NavLink>    
            </div>
        </section>
    )
}

export default Home