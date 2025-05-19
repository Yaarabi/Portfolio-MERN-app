
import e from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import router from "./routers/user.routes.js";
import authRouter from "./routers/athen.routers.js"
import protRouter from "./routers/protectControl.js"
import postRouter from "./routers/postRouters.js"
import cors from "cors"


dotenv.config()

const PORT=process.env.PORT

const app = e();
// app.use(cors())
app.use(e.json())
connectDB()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, 
}));


app.use("/api", router)

app.use("/", authRouter)
app.use("/", protRouter)
app.use("/", postRouter)


app.listen(PORT, ()=>{
    console.log(`server is connected on ${PORT}`)
})