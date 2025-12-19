require("dotenv").config({ quiet: true });
const express = require("express"); 
const mongoose = require("mongoose");
const cors = require("cors");
const app = express(); 
    app.use(cors()); 
    app.use(express.json()); 
// Connect to MongoDB   
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("MongoDB connection error:", err));
    app.get("/", async (req, res) => { 
         res.status(200).send("Xin chào bạn"); 
}); 
// Start server 
    app.listen(process.env.PORT || 3000, () => { 
        console.log("Server running on http://localhost:3000"); 
}); 