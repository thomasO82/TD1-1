const bookModel = require('../models/bookModel')
const bookRouter = require("express").Router()


bookRouter.post("/books", async (req, res) => {
    try {
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


bookRouter.get("/books" , async (req,res)=>{
    try {
        const search = {}
        const {title} = req.query
        if (title) {
            search.title = title
        }        
        const books = await bookModel.find(search)
        res.status(201).json({books: books})
    } catch (error) {
        res.status(500).json({err: error.message})
    }
})

bookRouter.get("/books/:id" , async (req, res)=>{
    try {
        const book = await bookModel.findById(req.params.id)
        if (!book) {
            res.status(404).json({message : "livre non trouvé" })
        }
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({error})
    }
})

bookRouter.put("/books/:id" , async (req, res)=>{
    try {
        const updated = await bookModel.findByIdAndUpdate(req.params.id,req.body)
        res.json({updated : updated})
    } catch (error) {
        res.status(500).json({err: error.message})
    }
})

bookRouter.delete("/books/:id", async (req,res)=> {
    try {
        const deleted = await bookModel.deleteOne({_id : req.params.id})
        res.status(201).json({deleted: deleted})
    } catch (error) {
        res.status(500).json({err: error.message})
    }
})


module.exports = bookRouter