// Consts needed
const express = require('express');
const path = require('path');
const api = require("./public/assets/js/index.js");


const PORT = 3001;

const app = express();


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.get('/api/notes', (req,res) => {

});

app.post('/api/notes', (req,res) => {

});

app.delete('/api/notes/:note_id', (req,res) => {
    
});




// hw setup

// look for fetches in public folder and take note of the routes

// fetch('/api/notes', {
//     method: 'GET',




// fetch('/api/notes', {
//     method: 'POST',




//   fetch(`/api/notes/${id}`, {
// method: 'DELETE',

