const express = require('express');
const notes = require('./notes.route');

const router = express.Router();

router.use('/', notes);

module.exports = router;