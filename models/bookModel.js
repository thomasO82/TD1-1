const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Le titre est manquant"]
    },
    author: {
        type: String,
        required:[true, "L'auteur est manquant"]
    },
    publishedDate: {
        type: Date,
        required:[true, "La date est manquante"]
    },
    genre: {
        type: String,
        required:[true, "Le genre est manquant"]
    },
    
})

const bookModel = mongoose.model("books", bookSchema) 
module.exports = bookModel