const Character = require('../models/character');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const characters = await Character.find({}).sort('character').exec();
    res.json(characters);
}

async function show(req, res) {
    const character = await Character.findById(req.params.id);
    res.json(character);
}