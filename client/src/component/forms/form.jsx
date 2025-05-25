

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = (props) => {

    const navigate = useNavigate()
    const [email, setEmail]= useState('')
    const [password, setPass] =useState('')

    const login = ()=>{
    axios.post("http://localhost:4000/login", { email, password })
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        navigate("/profile");
    })
    .catch((err) => {
        console.log(err);
        alert("Failed authentication");
    });

    }



    return (
    <div className="container pt-5 d-flex align-items-center flex-column rounded border  justify-content-evenly" style={{ height: "60vh", width: "30vw" }}>
        <input className="form-control" type="text"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        placeholder='your email'
        />
        <input className="form-control" type="password"
        value={password}
        onChange={(e) => { setPass(e.target.value) }}
        placeholder='your password'
        />
        <button className="btn btn-primary" onClick={ login }>login</button>
        <a href="">Forget password ?</a>
        <hr className="w-75" />
        <button className="btn btn-primary" onClick={ props.fun }>Create account</button>
    </div>

    
    )

}

export default Form
