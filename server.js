// Consts needed
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3001;


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get

// hw setup

// look for fetches in public folder and take note of the routes

// fetch('/api/notes', {
//     method: 'GET',

//app.get('/api/notes', (req,res) => {}


// fetch('/api/notes', {
//     method: 'POST',

// app.post('/api/notes', (req,res) => {}


//   fetch(`/api/notes/${id}`, {
// method: 'DELETE',

//app.delete('/api/notes/:note_id', (req,res) => {}