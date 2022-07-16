import './LoginScreen.css'
import React, {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";
// import {Link, useHistory} from 'react-router-dom'
//import {useHistory} from 'react-router-dom'
//import {useAlert} from 'react-alert';


const Register = () => {
        // const [username, setUsername] = useState()
        // const [password, setPassword] = useState()
        //
        //
        // function handleInputChange(e) {
        //     const { username, password } = e.target;
        //     setUsername({username})
        //     setPassword({password});
        // }
        //
        // async function handleSubmit(e) {
        //     e.preventDefault();
        //
        //     try {
        //         await httpPost('/api/register/', {username: username, password: password}, );
        //         history.push('/');
        //     } catch (error) {
        //         showError(error.response.data);
        //     }
        // }


 //       const history = useHistory()
        // const alert = useAlert()
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const registerUser = (e) => {
            e.preventDefault()
            httpPost("api/register/", {
                username: username,
                password: password,
            }, false).then(res => {
                    // alert.show('Se ha creado el usuario ', {
                    //     type: "success"
                    // })
                 //   history.push("/")

                }
             )
                // .catch(err => alert.show('No se ha podido crear el usuario', {
            //     type: "error"
            // }))
        }

        return (<div className='login-screen'>
                <div className='welcome-text-container'><h1>Bienvenido, cree su perfil</h1></div>
                <form className='form-container' onSubmit={registerUser}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label" >Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="form-control"
                            required
                            value={username}
                            minLength="3"
                            maxLength="30"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            required
                            value={password}
                        />
                    </div>
                    <div className={'button-container'}>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        )
    }

    export default Register

