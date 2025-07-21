import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.mjs"
import connectCloudinary from "./config/cloudnary.mjs"
import adminRouter from "./routes/adminRoutes.mjs"
import doctorRouter from "./routes/doctorRoute.mjs"
import userRouter from "./routes/userRoute.mjs"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints

app.use("/api/admin", adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)


app.use(cors({
  origin: "https://quick-doc-t12r.vercel.app/", 
  credentials: true
}));



app.get("/", (req, res) => {
  res.send("API Working perfectly...")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))