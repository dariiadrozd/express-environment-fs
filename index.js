const express = require("express");
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('./service')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    try {
        const data = getAllEnvironment();
        res.status(200).send(data);
    } catch (er) {
        console.log(er.message);
    }
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getEnvironmentById(id)
        res.status(200).send(data);
    } catch (er) {
        console.log(er.message);
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = createEnvironment(label, category, priority);
        res.status(201).send(data);
    } catch (er) {
        console.log(er.message);
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = updateEnvironment(id, label, category, priority)
        res.status(200).send(data);
    } catch (er) {
        console.log(er.message);
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteEnvironment(id);
        res.status(200).send(data);
    } catch (er) {
        console.log(er.message);
    }
})

app.listen(3000, () => {
    console.log('this server is running');
})