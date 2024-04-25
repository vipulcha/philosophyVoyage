const express = require('express');
const cors = require('cors');

const app=express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send("mamla");
})

app.get('/philosophers', async (req,res) => {
    const response = await fetch('https://philosophyapi.pythonanywhere.com/api/philosophers')
    const data = await response.json();
    res.json(data);
})

app.get('/philosophers/:id', async (req,res) => {
    const id = req.params.id;
    const response = await fetch(`https://philosophyapi.pythonanywhere.com/api/philosophers/${id}`)
    const data = await response.json();
    res.json(data);
})

app.get('/ideas', async (req,res) => {
    const response = await fetch('https://philosophyapi.pythonanywhere.com/api/ideas');
    const data = await response.json();
    res.json(data);
})

app.listen(PORT , () => {
    console.log("Server is listening at " + PORT);
})