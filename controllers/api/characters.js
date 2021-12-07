const Character = require('../../models/character');

module.exports = {
    index,
}

async function index(req, res) {
    const characters = await Character.find({}).sort('name').exec();
    characters.sort((a, b) => a.sortOrder - b.sortOrder);
    res.json(characters);
}