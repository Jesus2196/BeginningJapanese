const mongoose = require('mongoose');

const characterSchema = require('./characterSchema');

module.exports = mongoose.model('Character', characterSchema);