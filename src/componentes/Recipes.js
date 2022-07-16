import React, {useEffect, useState} from "react";
import {httpDelete, httpGet, httpPost, httpPut} from "../utils/httpFunctions";
import Card from "./Cards/Card";
import "../App.css"



const Recipes = () => {

    const [filtered, setFiltered] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])

    const clickFunction = () => {
        setFiltered(!filtered)
    }

    const getName = () => {
        return filtered ? "Dejar de filtrar" : "Filtrar"
    }

    let finalRecipes = recipes;


    const fetchRecipes = () => {
        httpGet('api/Recipes/')
            .then((res) => setRecipes(res.data))
    }

    const createRecipe = () => {
        httpPost('api/Recipes/', {name: name, description: description, price: price})
            .then(fetchRecipes)
    }

    const deleteRecipe = () =>{
        httpDelete('api/Recipes/'+{id:this.id} +"/")
            .then(fetchRecipes)
    }
    const modifyRecipe = () =>{
        httpPut('api/Recipes/'+ {id:this.id})
            .then(fetchRecipes)
    }




    useEffect(fetchRecipes, [])


    return (
        <div>
            <div>
                <h1>Recetas de cocina</h1>
            </div>
            <div className="inputWide">
                <form onSubmit={createRecipe}>
                    <fieldset>
                        <legend>Cree su Receta!</legend>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Nombre de la Receta</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={name}
                                   onChange={(e) => setName(e.target.value)} placeholder="Ej: Torta Oreo"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Descripcion</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={description}
                                   onChange={(e) => setDescription(e.target.value)}
                                   placeholder="Ej: Ingredientes: 1 paquete de galletitas oreos, etc."
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Precio</label>
                            <input type="text" id="disabledTextInput" className="form-control" value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                                   placeholder="Ej: 200"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">CREAR RECETA</button>
                    </fieldset>
                </form>
            </div>
            <div className="container d-flex justify-content-around h-100">
                    {
                        finalRecipes
                            .map((maprecipe) => {
                                return (
                                    <Card receta={maprecipe}/>
                                )
                            })
                    }
            </div>
        </div>)
}

export default Recipes;