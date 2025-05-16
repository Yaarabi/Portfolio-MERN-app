
import e from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import router from "./routers/user.routes.js";
import cors from "cors"


dotenv.config()

const PORT=process.env.PORT

const app = e();
app.use(cors())
app.use(e.json())
connectDB()


app.use("api", router)


app.listen(PORT, ()=>{
    console.log(`server is connected on ${PORT}`)
})