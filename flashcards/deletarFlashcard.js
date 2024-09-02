const { flashcards } = require('../data')

const deletarFlashcard = (req,res) =>{
    const { idDoBaralho } = req.params
    const { id } = req.params
    const index = flashcards.findIndex((f) => f.id == id)

    if(index === -1){
        return res.status(404).send('Flashcard não encontrado')
    }

    const flashcardDeletado = flashcards.splice(index, 1) [0]

    res.status(200).send({
        message: 'Flashcard deletado com sucesso',
        flashcards: flashcardDeletado
    })
}

module.exports = deletarFlashcard