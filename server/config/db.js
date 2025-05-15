
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () =>{
    
    
    try {
        await mongoose.connect(process.env.URI)
        console.log("db connected successfuly")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB

