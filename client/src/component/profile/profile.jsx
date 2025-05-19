
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css"
import axios from "axios";
import Header from "../header/header";
import Post from "../post/post";
import CreatePost from "../post/createPost";
// import { jwtDecode } from "jwt-decode";

const Profile = () => {


    const navigate =useNavigate()
    const [data, setData]= useState(null)
    const [ create, setCreate ] = useState(false)
    const [ posts, setPost] = useState([])


useEffect(() => {


axios.get("http://localhost:4000/profile", {
    withCredentials: true,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
})
.then((res) => {
    setData(res.data.user)
    console.log(res.data.user)
})
.catch((err) => {
    console.log(err); 
    navigate("/"); 
});


}, [navigate]);

useEffect(()=>{

    axios.get("http://localhost:4000/getPosts")
    .then((res)=> {
        console.log( res.data)
        setPost(res.data)
    })
    .catch((err)=>console.log(err))

}, [])



    const logout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
};

    const disaPost = ()=>{
        setCreate(false)
    }


    return ( 
    <>
    { data && <Header name ={ data.username } />}
    <div className="add">
        <span>Share code ?</span>
        <button onClick={ () => setCreate(true)  }>New post</button>
    </div>
    { data && create && <CreatePost id = { data._id } fun = { disaPost } />}
    { (data)? <> {posts.map((ele, i)=>(<Post key={ i } username = { ele.authorId } title={ ele.title } desc={ ele.content } date={ ele.createdAt } />))} </> :  <span> leading ...</span>}
    <button onClick={ logout }>logout</button>
    </>
)};

export default Profile;
