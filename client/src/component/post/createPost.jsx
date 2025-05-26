
import { useState } from "react"
import axios from "axios"
import "./createPost.css"

const CreatePost = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const createPost = () => {
        axios.post("http://localhost:4000/post", {
            title, content, authorId: props.id
        })
    }

    return (
        <div className="createPost">
        <img onClick={()=>{ props.fun() }} src="/assets/back (1).png" height={"20px"} width={"20px"} alt="" />
        <input type="text"
        id="titel"
        className="form-control"
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        placeholder='title or languege'
        />
        <textarea
        id="descr"
        className="form-control"
        value={content}
        onChange={(e) => { setContent(e.target.value) }}
        placeholder='description or code'
        />

        <button className="btn btn-light" onClick={()=>{ createPost(), props.fun() } }>Create post</button>
    </div>
)
}

export default CreatePost

