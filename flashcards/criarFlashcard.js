const { flashcards } = require('../data');

function criarFlashcard(req, res) {
    console.log(req.body)
        const novoFlashcard = {
            idDoBaralho: req.body.idDoBaralho,
            id: flashcards.length + 1,
            pergunta: req.body.pergunta,
            resposta: req.body.resposta
        }
        flashcards.push(novoFlashcard)
        res
        .status(201)
        .send({message: 'Baralho criado com sucesso!', flashcards: novoFlashcard})
    }
    
    module.exports = criarFlashcard