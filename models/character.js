const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    img_path: { type: String },
    character: { type: String },
    strokeOrder: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);