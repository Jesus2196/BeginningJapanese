const character = require('../../models/character');
const Character = require('../../models/character');


module.exports = {
    index,
    create,
}

async function index(req, res) {
    const characters = await Character.find({}).sort('name').exec();
    characters.sort((a, b) => a.sortOrder - b.sortOrder);
    res.json(characters);
}

async function create(req, res) {
    const characters = await Character(req.body);
    characters.save();
    res.json(characters);
}