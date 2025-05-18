
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";

const Profile = () => {


    const navigate =useNavigate()
    const [data, setData]= useState(null)


useEffect(() => {


axios.get("http://localhost:4000/profile", {
    withCredentials: true,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
})
.then(response => setData(response.data.user))
.catch((err) => {
    console.log(err); 
    navigate("/"); 
});


}, [navigate]);



    const logout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
};


    return ( 
    <>
    <h1>Welcome to your profile!</h1>
    {data && <h2>{data.email}</h2>}
    <button onClick={ logout }>logout</button>
    </>
)};

export default Profile;
