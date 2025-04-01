const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({ name: String });

module.exports = mongoose.model('Item', ItemSchema);
