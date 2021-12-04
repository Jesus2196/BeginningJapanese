const Schema = require('mongoose').Schema;

const characterSchema = new Schema({
    img_path: { type: String, require: true },
    character: { type: String, require: true },
    strokeOrder: { type: String, require: true },
}, {
    timestamps: true
});

module.exports = characterSchema;