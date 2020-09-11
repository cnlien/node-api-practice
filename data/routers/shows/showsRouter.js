const express = require('express')
const showsDb = require('../../helpers/showsModel.js')
const router = express.Router();

router.post('/', (req,res) => {
    showsDb.insert(req.body)
        .then((show) => {
            res.status(201).json(show)
        })
        .catch((err) => {
            res.status(500).json({
                message: "The server is not responding",
                error: err
            })
        })

})

router.get('/', (req,res) => {
    showsDb.get(req.id)
        .then((show) => {
            res.status(200).json(show)
        })
        .catch((err) => {
            res.status(500).json({
                message: "The server is not responding",
                error: err
            })
        })
})

router.get('/:id/characters', (req, res) => {
    showsDb.getShowsCharacters(req.params.id)
        .then((showCharacters) => {
            res.status(200).json(showCharacters)
        })
        .catch((err) => {
            res.status(500).json({
                message: "The server is not responding",
                error: err
            })
        })
})


router.put('/:id', (req,res) => {
    showsDb.update(req.params.id, req.body)
        .then((show) => {
            show
            ? res.status(201).json({
                show,
                message: "The Show was Successfully Updated"
            })
            : res.status(404).json({
                message: "That show does not exist"
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "There server is not responding",
                error: err
            })
        })
})

router.delete('/:id', (req,res) => {
    showsDb.remove(parseInt(req.params.id))
        .then((show) => {
            show
            ? res.status(202).json({ message: "The show has been deleted" })
            : res.status(404).json({ message: "That show does not exist" })
        })
        .catch((err) => {
            res.status(500).json({ message: "The server did not respond", error: err })
        })
})

module.exports = router;
