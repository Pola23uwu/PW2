const express = require("express");
const path = require("path");
const pagesRutes = require("./rutas/pages");

const app = express();
const PORT = 3038;

app.use(express.static('publico'));

app.use('/',pagesRutes);
app.get('/', (req, res)=> {
    res.redirect('/index');
});


app.listen(PORT, ()=> {
    console.log(`Escuchando desde http://localhost:${PORT}`)
});