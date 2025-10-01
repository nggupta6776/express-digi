import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// Get all teas
app.get('/teas', (req, res) => {
    res.send(teaData);
});

// Add a new tea
app.post('/teas', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).send({ error: 'Name and price are required.' });
    }
    const newTea = { id: nextId++, name, price };
    teaData.push(newTea);
    res.status(201).send(newTea);
});

app.get('/teas/', (req, res) => {
    res.status(200).send(teaData);
})

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}...`);
});
