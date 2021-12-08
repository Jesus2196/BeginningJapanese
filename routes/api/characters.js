const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/api/characters');

router.get('/', charactersCtrl.index);
router.post('/studying', charactersCtrl.create);

module.exports = router;