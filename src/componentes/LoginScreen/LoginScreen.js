import './LoginScreen.css'
import React, {useState} from "react";
import {httpPost} from "../../utils/httpFunctions";
// import {Link, useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

const LoginScreen = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

  //  const history = useHistory();

    const login = (e) => {
        e.preventDefault()
        httpPost('api/login/', {username: username, password: password}).then((res) => {
            localStorage.setItem('token', res.data.access)
         //   history.push('/')
        })
    }

    return (
        <div className='login-screen'>
            <div className='welcome-text-container'><h1>Bienvenido, ingrese a su perfil</h1></div>
            <form className='form-container' onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label" >Username</label>
                    <input
                        className="form-control"
                        id="exampleFormControlInput1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Password" />
                </div>
                <div className={'button-container'} >
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button className="btn">
                        <Link to={'/Register'}>Register</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen