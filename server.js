const express = require("express");
const mongoose = require("mongoose")
const bookRouter = require("./routes/bookRouter")
const port = 3000

const app = express()
app.use(express.json())
app.use(bookRouter)

app.listen(port, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log(`Connecté au serveur port : ${port}`);
    }
})

mongoose.connect("mongodb://localhost:27017/booksMu")

app.get("/", (req,res)=>{
    res.json({message : "bonjour"})
})