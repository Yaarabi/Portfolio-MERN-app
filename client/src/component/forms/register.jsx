

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
    <div className="form">
        <input type="text"
        value={username}
        onChange={(e) => { setName(e.target.value) }}
        placeholder='your user name'
        />
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

        <button onClick={ ()=>{ signUP(), props.fun() } }>Create account</button>
    </div>
    )
}

export default Register
