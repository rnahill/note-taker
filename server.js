// Consts needed
const express = require('express');
const path = require('path');
const  fs = require('fs');
let db = require('./db/db.json');


const PORT = process.env.PORT || 3001;

const app = express();


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'notes.html'));
});

app.get('/api/notes', (req,res) => {
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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);






