
import axios from "axios";
import { create } from "zustand";

const intialState = {
    loading : false,
    error : false,
    posts : null
}

export const getPost = create((set)=>({

    ...intialState ,

    fetchData : async () => {
        set({ loading: true, error: null })

        try {
            
            const res = await axios.get("http://localhost:4000/getPosts")
            set({ loading: false, posts: res.data })

        } catch (error) {
            console.log("error in the fetching", error)
            set({ loading: false, error: error.message })
        }

    },
    addLike : async (id) => {
        try {
            
            const res = await axios.get(`http://localhost:4000/getPosts/${id}`)
            const currentLIkes = res.data.likes
            const after = currentLIkes + 1;
            await axios.put(`http://localhost:4000/putPosts/${id}`,{
                likes: after
            })
            console.log(after)
        } catch (error) {
            console.log(error)
        }
    }

}))