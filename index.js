const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});


//baralhos

const criarBaralho = require('./baralhos/criarBaralho')
app.post('/baralho', criarBaralho)

const atualizarBaralho = require('./baralhos/atualizarBaralho');
app.put('/baralho/:id', atualizarBaralho);

const listarBaralhos = require('./baralhos/listarBaralhos');
app.get('/baralho', listarBaralhos);

const deletarBaralho = require('./baralhos/deletarBaralho');
app.delete('/baralho/:id', deletarBaralho);

//flashcards

const criarFlashcard = require('./flashcards/criarFlashcard')
app.post('/flashcard', criarFlashcard)

const listarFlashcards = require('./flashcards/listarFlashcards');
app.get('/flashcard', listarFlashcards);

const atualizarFlashcard = require('./flashcards/atualizarFlashcard');
app.put('/flashcard/:idDoBaralho/:id', atualizarFlashcard);

const deletarFlashcard = require('./flashcards/deletarFlashcard');
app.delete('/flashcard/:idDoBaralho/:id', deletarFlashcard);
