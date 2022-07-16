import pgimg from "../images/torta.png";
import React from "react";
import alfajores from '../images/alfajores.png';
import budin from '../images/budin.png';
import chipas from '../images/chipas.png'



const Home = () => {
    return (
        <div>
            <div className="title-container">
                <h1 className="custom-title">Bienvenidos</h1>
                <p className="title-desc">¡Dejate llevar por los sabores! </p>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={alfajores} className="d-block w-100" alt="alfajores"/>
                    </div>
                    <div className="carousel-item">
                        <img src={budin} className="d-block w-100" alt="budin"/>
                    </div>
                    <div className="carousel-item">
                        <img src={chipas} className="d-block w-100" alt="chipas"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="contents-container">
                <h2>¿Quiénes somos?</h2>
                <h3>Somos DejateTentar, aficionados por el mundo de la pastelería, queremos compartirles nuestros
                    sabores
                    para que disfruten con nosotros</h3>
                <div className="contens-div">
                    <ul className="contents">
                        <img src={pgimg} className="picture"/>
                        <h4> Queremos ofrecerte:</h4>
                        <li className="list-hover">TORTAS</li>
                        <li className="list-hover">TORTAS DE CUMPLEAÑOS</li>
                        <li className="list-hover">ALFAJORES</li>
                        <li className="list-hover">GALLETITAS</li>
                        <li className="list-hover">MASAS SECAS</li>
                        <li className="list-hover">TARTAS</li>
                        <li className="list-hover">CHIPAS</li>
                        <li className="list-hover">BUDINES</li>
                    </ul>
                </div>
            </div>
        </div>);
}


export default Home;