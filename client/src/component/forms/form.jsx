
import "./forms.css"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {

    const navigate = useNavigate()
    const [email, setEmail]= useState('')
    const [password, setPass] =useState('')

    const login = ()=>{
    axios.post("http://localhost:4000/login", { email, password })
    .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token)
        navigate("/profile");
    })
    .catch((err) => {
        console.log(err);
        alert("Failed authentication");
    });

    }



    return (
    <div className="form">
        <input type="text"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        placeholder='your email'
        />
        <input type="password"
        value={password}
        onChange={(e) => { setPass(e.target.value) }}
        placeholder='your password'
        />
        <button onClick={login}>login</button>
        <a href="">Forget password ?</a>
        <hr />
        <button>Create account</button>
    </div>
    )
}

export default Form
