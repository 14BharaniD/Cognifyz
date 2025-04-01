const express = require('express');
const Item = require('../models/Item');
const router = express.Router();

// Create Item
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
});

// Read Items
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Update Item
router.put('/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
});

// Delete Item
router.delete('/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
});

module.exports = router;
