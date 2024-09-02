const { flashcards } = require('../data')

const atualizarFlashcard = (req,res) => {
    const { idDoBaralho } = req.params
    const { id } = req.params
    const novaPergunta = req.body.pergunta
    const novaResposta = req.body.resposta

    const flashcard = flashcards.find((f) => f.id == id)

    if(!flashcard){
        return res.status(404).send({message: 'Flashcard não encontrado'})
    }

    flashcard.pergunta = novaPergunta
    flashcard.resposta = novaResposta
    res.status(200).send({
        message: 'Flashcard atualizado com sucesso!',
        flashcard: flashcards
    })
}

module.exports = atualizarFlashcard