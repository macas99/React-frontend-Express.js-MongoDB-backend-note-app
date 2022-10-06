let Note = require('../models/Note');

const getAll = function (req, res) {
    Note.find().sort([['updatedAt', -1]])
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err));
}

const getOne = function (req, res) {
    Note.findById(req.params.id)
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json('Error: ' + err));
}

const searchNote = function (req, res) {
    const query = req.params.query;
    if (query) {
        Note.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { content: { $regex: query, $options: 'i' } }] })
            .then(notes => res.json(notes))
            .catch(err => res.status(400).json('Error: ' + err));
    }
}

const saveNote = function (req, res) {
    const title = req.body.title;
    const content = req.body.content;

    const note = new Note({
        title,
        content,
    });

    note.save()
        .then(() => res.json('Note added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

const updateNote = function (req, res) {
    Note.findById(req.params.id)
        .then(note => {
            note.title = req.body.title;
            note.content = req.body.content;
            note.save()
                .then(() => res.json('Note updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

const deleteNote = function (req, res) {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json('Note deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));

}

module.exports = {
    getAll,
    getOne,
    searchNote,
    saveNote,
    updateNote,
    deleteNote
};