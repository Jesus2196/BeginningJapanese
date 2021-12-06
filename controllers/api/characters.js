const Character = require('../../models/character');

module.exports = {
    index,
}

async function index(req, res) {
    const characters = await Character.find({});
    res.json(characters);
}