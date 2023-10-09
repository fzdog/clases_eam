import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes/user.route"
import dbConnect from "./config/config"
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("[APP is running on port]:"+PORT);    
})

app.use(router)

dbConnect().then(() => {
    console.log("[MONGODB is running]");    
}, (err) => {
    console.log("Error conectando la BD:",err);
    
})