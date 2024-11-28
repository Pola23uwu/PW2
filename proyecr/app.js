const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3036;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));  // Para servir archivos estáticos como CSS

// Motor de plantillas
app.set('view engine', 'ejs');

// Función para leer y escribir en el archivo data.json
function readData() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));
}

// Página principal: mostrar lista de usuarios
app.get('/', (req, res) => {
  const users = readData();
  res.render('index', { users });
});

// Página para agregar un usuario
app.get('/add', (req, res) => {
  res.render('add');
});

// Agregar un nuevo usuario
app.post('/add', (req, res) => {
  const { name, email } = req.body;
  const users = readData();
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  writeData(users);
  res.redirect('/');
});

// Página para editar un usuario
app.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  const users = readData();
  const user = users.find(u => u.id == id);
  res.render('edit', { user });
});

// Modificar un usuario
app.post('/edit/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const users = readData();
  const user = users.find(u => u.id == id);
  user.name = name;
  user.email = email;
  writeData(users);
  res.redirect('/');
});

// Eliminar un usuario
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const users = readData();
  const updatedUsers = users.filter(u => u.id != id);
  writeData(updatedUsers);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
