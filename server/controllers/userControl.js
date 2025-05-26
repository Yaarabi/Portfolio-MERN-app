
import User from "../models/user.model.js";



const getUsers = async (rea,res) =>{

    try {

        const result = await User.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({ message : "Can find Users" })
    }

}

const getOneUser = async (req,res) =>{

    const {id} = req.params
    try {

        const result = await User.findById(id);
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({ message : "Can find User" })
    }

}

const putUser = async (req,res) =>{

    const {id} = req.params
    const detail = req.body

    try {
        
        const result= User.findByIdAndUpdate(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({ message : "Error in put the user" })
    }

}

const deleteUser = async (req,res) =>{

    const {id} = req.params
    const detail = req.body

    try {
        
        const result= User.findByIdAndDelete(id, detail, { new: true })
        if(!result){
            return  res.status(404).json({ message : "Not found" })
        }
        
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({ message : "Error in delet user" })
    }

} 

export { getUsers, putUser, deleteUser, getOneUser }