import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";



function Navbar() {
    return (

        <div>
            <h1 className="custom-title">LaikaGym</h1>
            <div className="nav-bar">
                <Link to="/"><h4 className="nav-element nav-hover">Inicio</h4></Link>

                <Link to="/Excercise"> <h4 className="nav-element nav-hover">Ejercicios</h4></Link>

                <Link to="/Routine"> <h4 className="nav-element nav-hover">Rutina</h4></Link>

                {/*<Link to={'/Tienda'}><h4 className="nav-element nav-hover">Tienda</h4></Link>*/}

                <Link to={'/Profile'}><h4 className="nav-element nav-hover">Mi Perfil</h4></Link>

            </div>
        </div>
    );
}
export default Navbar;