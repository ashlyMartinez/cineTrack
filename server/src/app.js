// Inititalize express + global middleware
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


// Import module routers 

require("dotenv").config();

const app = express(); 

// Global Middleware
app.use(cors());
app.use(bodyParser.json()); 


app.get('/', (req, res) => {
    res.json({message: 'CineTrack API is running!'});
})

export default app;