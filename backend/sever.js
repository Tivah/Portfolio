const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.status(201).send('Task added successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
