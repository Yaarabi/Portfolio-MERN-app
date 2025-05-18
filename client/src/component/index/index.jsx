
import "./style.css"
import Form from "../forms/form.jsx"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Register from "../forms/register.jsx"
// import {jwtDecode} from "jwt-decode"

const Home = () => {

    const [ create, setCreate ] = useState(false)
    const navigate = useNavigate()

    const showRegister = () =>{
        setCreate(true)
    }
    const afterRegister = () =>{
        setCreate(false)
    }

    useEffect(()=>{
        if (localStorage.getItem("token")){
            return (navigate("/profile"))
        }
    }, [navigate])

//     useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//         const { exp } = jwtDecode(token);
//         if (Date.now() >= exp * 1000) {
            
//             localStorage.removeItem("token");
//         } else {
//             navigate("/profile");
//         }
//     } catch (err) {
        
//         console.log(err)
//         localStorage.removeItem("token");
//     }
// }, [navigate]);

return (
    <section>
        { !create && <div className="description">
            <h1>Elevate Your Portfolio</h1>
            <p>Portfolio-MERN-app: Showcase your projects, write blog posts, and learn with interactive resources. Elevate your MERN stack skills! </p>
        </div>}
        { !create && <Form fun={ showRegister }/>}
        { create && <Register fun = {afterRegister}/>}
    </section>
)
}

export default Home




