import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send("server is ready")
// })

app.use(express.static('dist'));



app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First joke',
            content: 'How do trees get on the Internet?  They log in.'

        },
        {
            id: 2,
            title: 'Second joke',
            content: 'What do computers like to eat? Chips.'

        },
        {
            id: 3,
            title: 'Third joke',
            content: 'What is a computer’s first sign of old age?  Loss of memory.'

        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'What does a baby computer call his father?  Instead of Da-da it says “Da-ta.”'

        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'How does a boy cell phone propose to his girlfriend?  He gives her a ring, of course.'

        },
        {
            id: 6,
            title: 'sixth joke',
            content: 'Why was there a bug in the computer? It was looking for a byte to eat.'

        },

    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server at http://localhost:${port}')
})
