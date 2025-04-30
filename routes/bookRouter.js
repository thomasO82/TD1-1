const bookModel = require('../models/bookModel')
const bookRouter = require("express").Router()


bookRouter.post("/books", async (req, res) => {
    try {
        console.log(req.body);
        
        const book = new bookModel({
            title: req.body.title,
            author: req.body.author,
            publishedDate: req.body.publishedDate,
            genre: req.body.genre,
        })
        await book.save()
        res.json({ message: "le livre est bien créé", book: book })
    } catch (error) {
        console.log(error);
        res.json({ err : error, message: "Erreur lors de l'envoi de la donnée" })
    }
})
module.exports = bookRouter