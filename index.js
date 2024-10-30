//importando express 
const express = require('express');

const path = require('path');

//creando la app de express
const app = express();

// Ruta para la página de bienvenida
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './bienvendios.html'));
});
  
  // Ruta para la página "Conócenos"
app.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, './conocenos.html'));
});
  
  // Ruta para la página "Quiénes Somos"
app.get('/somos', (req, res) => {
    res.sendFile(path.join(__dirname, './somos.html'));
});


// definiendo el puesto al que se va a comunicar
const port = 3098;
app.listen(port, () => {
    console.log('Esperando peticiones');
});