const express = require('express');

const router = express.Router();
const Cart = require('../models/cart')

router.post('/', (req, res) => {
    let newCart = new Cart({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl,

    })
    newCart.save((err, result) => {
        if (err) console.log(err);
        else res.status(200).send(result)
    })
})
router.delete('/:id', (req, res) => {       
    console.log("Crt", Cart)  ;       
    Cart.findByIdAndDelete({ _id: req.params.id }, (err, result) => {        
        if (err)          res.status(404).send(err);         
        else          res.status(200).send(result)    
    })    
})
router.get('/', (req, res) => {

    Cart.find((err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})
module.exports = router;