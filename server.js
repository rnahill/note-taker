// Consts needed
const express = require('express');
const path = require('path');
const  fs = require('fs');
const db = require('./db/db.json');


const PORT = 3001;

const app = express();


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// API routes

app.get('./api/notes', (req,res) => {
    fs.readFile('./db/db.json', (err, data) =>{
        if (err) {
            console.log(err);
        };
        let dbData = JSON.parse(data);
        res.json(dbData);
    })
});

app.post('/api/notes', (req,res) => {
    let newNote = req.body;
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
});






