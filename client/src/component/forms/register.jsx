

import axios from "axios"
import { useState } from "react"

const Register = (props) => {

    const [email, setEmail]= useState('')
    const [username, setName] = useState('')
    const [password, setPass] =useState('')

    const signUP = ()=> {
        // console.log({email, username, password})
        axios.post("http://localhost:4000/register", {
            username, email, password
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
    <div className="position-relative container d-flex align-items-center flex-column rounded border  justify-content-evenly" style={{ height: "50vh", width: "30vw" }}>
        <img className="position-absolute top-0 start-0" onClick={()=>{ props.fun() }} src="/assets/back (1).png" width={"20px"}  alt="" />
        <input type="text"
        className="form-control"
        value={username}
        onChange={(e) => { setName(e.target.value) }}
        placeholder='your user name'
        />
        <input type="text"
        className="form-control"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        placeholder='your email'
        />
        <input type="password"
        className="form-control"
        value={password}
        onChange={(e) => { setPass(e.target.value) }}
        placeholder='your password'
        />

        <button className="btn btn-success" onClick={ ()=>{ signUP(), props.fun() } }>Create account</button>
    </div>
    )
}

export default Register
