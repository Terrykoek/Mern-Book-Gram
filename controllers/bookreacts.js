const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Bookreacts = require('../models/bookreacts');

router.post('/', (req, res) => {
    Bookreacts.create(req.body, (err, createdBookreact) => {
        res.json(createdBookreact);
    });
});

router.get('/', (req, res) =>{
    Bookreacts.find({}, (err, foundBookreacts)=>{
        res.json(foundBookreacts);
    });
});


router.put('/:id', (req, res) =>{
    Bookreacts.findByIdAndUpdate(req.params.id, req.body, { new: true },(err, updatedBookreact)=> {
        res.json(updatedBookreact);
    },);
});

router.delete('/:id', (req, res) =>{
    Bookreacts.findByIdAndRemove(req.params.id, (err, deletedBookreact) =>{
        res.json(deletedBookreact);
    });
});

module.exports = router; 