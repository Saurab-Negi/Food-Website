import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food.js";

// App config
const app= express()
const port= 3000;

// Middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// API endpoints
app.use("/images", express.static('uploads'))
app.use("/food", foodRouter)

app.get("/", (req, res) =>{
    res.send("API working")
})

app.listen(port, () =>{
    console.log(`Server listening at ${port}`)
})