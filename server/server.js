
import e from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"


dotenv.config()

const PORT=process.env.PORT

const app = e()
connectDB()




app.listen(PORT, ()=>{
    console.log(`server is connected on ${PORT}`)
})