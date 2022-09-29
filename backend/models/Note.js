const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: String, trim: true },
    content: { type: String, trim: true, required: true },
}, {
    timestamps: true,
})

module.exports = mongoose.model('note', noteSchema);