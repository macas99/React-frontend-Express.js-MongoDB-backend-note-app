const express = require('express');
const router = express.Router({ mergeParams: true });

const notesController = require('../controllers/notes.controller');

router.route('/')
    .get(notesController.getAll);

router.route('/:id')
    .get(notesController.getOne);

router.route('/')
    .post(notesController.saveNote);

router.route('/:id')
    .patch(notesController.updateNote);

router.route('/:id')
    .delete(notesController.deleteNote);

module.exports = router;