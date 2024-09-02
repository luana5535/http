const { flashcards } = require('../data')

const listarFlashcards = (req, res) => {
    res.status(200).send(flashcards)
}

module.exports = listarFlashcards