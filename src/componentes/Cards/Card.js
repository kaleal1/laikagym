import React, {useState} from "react";
import image1 from "./CardsImage.png";
import "./card.css";
import {httpDelete, httpGet, httpPut} from "../../utils/httpFunctions";

function Card({ejercicio}) {

    const [excercise, setExcercise] = useState([])
    const [description, setDescription] = useState([])

    let idexcercise = excercise.id;
    let excercisename = excercise.name;
    // let recipeprice = excercise.price;

    const deleteExcercise = () =>{
        httpDelete('backend/Excercise/'+idexcercise +"/")
            .then(fetchExcercise)
    }
    const modifyExcercise = () =>{
        httpPut('backend/Excercise/'+idexcercise+"/", {id: idexcercise ,name: excercisename})
            .then(fetchExcercise)
    }


    const fetchExcercise = () => {
        httpGet('backend/Excercise/')
            .then((res) => setExcercise(res.data))
    }

    let finalExcercise = excercise;

    return (

        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={image1} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{ejercicio.name}</h4>
                <p className="card-text text-secondary">
                    {ejercicios.description}
                </p>

                <h4>id: {ejercicio.id}</h4>

            </div>
            <div>
                <form onSubmit={deleteExcercise}>
                <button type="submit" className="bg-black text-white px-2 px-1">
                    Borrar Ejercicio
                </button>
                </form>
                <form onSubmit={modifyExcercise}>
                    <input type="text" id="disabledTextInput" className="form-control" value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Modificar Ejercicio"
                    />
                <button type="submit" className="bg-black text-white px-2 px-1">
                    Modificar Ejercicio
                </button>
            </form>
            </div>
        </div>
    );
}

export default Card;


