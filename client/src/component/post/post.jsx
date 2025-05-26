
// import "./post.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaHeart, FaComment, FaSave } from "react-icons/fa"
import { getPost } from "../../Zustand/store"

const Post = (props) => {

    const { addLike } = getPost()
    const [user, setUser] = useState()
    const [color, setColor] = useState("black")

    const like = () => {
        (color == "black")? setColor("red") : setColor("black")
    }
    
    useEffect(()=>{
        try {
            // console.log(props.username)
            axios.get(`http://localhost:4000/users/${props.username}`)
            .then((res)=>{ setUser(res.data) })
            

        } catch (error) {
            console.log(error.message)
        }
    
    },[props.username])


    return (
    <article className='card w-75 mt-3 '>
        <div className="card-header">
            {user && <h3>{ user.username }</h3>}
            <span>{props.date}</span>
        </div>
        <p className="card-body">
            <h2>{ props.title }</h2>
            { props.desc }
        </p>
        <div className="card-footer d-flex justify-content-evenly">
            <FaHeart onClick={() => { like(); addLike(props.id) }} size={24} color={color} style={{cursor: "pointer"}} />
            <FaComment size={24} />
            <FaSave size={24} />
        </div>
    </article>
    )
}

export default Post
