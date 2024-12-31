import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/blog.js";
dotenv.config();

const app = express();

// Main routes
app.get("/", (req, res)=>{
    res.send("<h1>Server is Ready and Running........</h1>");
});

// middlewares
app.use(cors());
app.use(express.json());

app.use(express.static("public/upload"));


// Listening port
const port = process.env.PORT || 5050;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);  
});

// DB Connection
connectDB()
.then(()=>{
    // console.log(`connection string is ${process.env.MONGO_URL}`);
})
.catch((err)=>{
    console.log(err);
}); 

// API Routes 
app.use("/api/v1", authRoutes);
