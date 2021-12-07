const Schema = require('mongoose').Schema;

const characterSchema = new Schema({
    characterType: { type: String },
    img_path: { type: String },
    character: { type: String },
    strokeOrder: { type: String },
    eColor: { type: String },
    jColor: { type: String },
    hColor: { type: String },
    eNumber: { type: String },
    jNumber: { type: String },
    hNumber: { type: String },
    eWord: { type: String },
    jWord: { type: String },
    hWord: { type: String },
    sortOrder: Number
}, {
    timestamps: true
});

module.exports = characterSchema;