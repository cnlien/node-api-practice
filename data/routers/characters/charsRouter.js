const express = require('express')
const charsDb = require('../../helpers/charactersModel.js')
const router = express.Router()

router.post('/', validateChar, (req, res) => {
    charsDb.insert(req.body)
        .then((character) => {
            res.status(201).json({ message: `${req.body.name} has been added`, character })
        })
        .catch((err) => {
            res.status(500).json({
                message: "The server is not responding",
                error: err
            })
        })
})

router.get('/', (req, res) => {
    charsDb.get(req.id)
        .then((characters) => {
            res.status(200).json(characters)
        })
        .catch((err) => {
            res.status(500).json({
                message: "The server is not responding",
                error: err
            })
        })
})

router.put('/:id', (req, res) => {
    charsDb.update(req.params.id, req.body)
        .then((character) => {
            character
                ? res.status(201).json({
                    character,
                    message: "The character was updated successfuly"
                })
                : res.status(404).json({
                    message: "That charcter does not exisit"
                })
        })
        .catch((err) => {
            res.status(500).json({
                message: "The server is not responding",
                error: err
            })
        })
})

router.delete('/:id', (req, res) => {
    charsDb.remove(parseInt(req.params.id))
        .then((character) => {
            character
            ? res.status(202).json({ message: "The character has been deleted" })
            : res.status(404).json({ message: "That user does not exisit" })
        })
        .catch((err) => {
            res.status(500).json({ message: "The server did not respond", error: err})
        })
})

function validateChar(req,res,next) {
    const data = req.body;
    !data
        ? res.status(400).json({ message: "missing character data" })
        : !data.show_id ? res.status(400).json({ message: "missing show id" })
        : next();
}

module.exports = router;