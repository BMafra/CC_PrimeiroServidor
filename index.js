const express = require("express");
const app = express();
const port = 3000

app.use(express.json())

const listaPessoas = [
    {
        id: 1,
        nome: "Joaquina",
        idade: 100
    },
    {
        id: 2,
        nome: "Jadina",
        idade: 1000
    },
    {
        id: 3,
        nome: "Jasmin",
        idade: 10000
    }
]

const listaUsuarios = [
    {
        id: 1,
        user: "bruninha_doCorre"
    },
    {
        id: 2,
        user: "jaozinDograu",
    }, 
    {
        id: 3,
        user: "camillyTopDasTop"
    },
    {
        id: 4,
        user: "dieguitoFodita"
    }
]

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/api/pessoas', (req, res) => {
    console.log(req)

    res.send(listaPessoas)
})

app.get('/api/usuarios', (req, res) => {
    res.send(listaUsuarios)
})

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body
    pessoa.id = listaPessoas.length + 1
    listaPessoas.push(pessoa)
    res.json(pessoa)
})

app.post('/api/usuarios', (req, res) => {
    const user = req.body
    user.id = listaUsuarios.length + 1;
    listaUsuarios.push(user);
    res.json(user);
})

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoa = req.body
    const index = listaPessoas.findIndex(pessoaLista => pessoaLista.id == id)
    pessoa.id = id
    listaPessoas[index] = pessoa
    res.json(pessoa)
})

app.put('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const index  = listaUsuarios.findIndex(userLista => userLista.id == id);
    user.id = id;
    listaUsuarios[index] = user;
    res.json(user);
})

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoaLista => pessoaLista.id == id)
    res.send(pessoa)
})

app.get('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const user = listaUsuarios.find(userLista => userLista.id == id);
    res.send(user);
})

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(p => p.id == id)
    listaPessoas.splice(index, 1)
    res.json(listaPessoas)
})

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(userLista => userLista.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios);
})

app.listen(port, () => {
    console.log("Example, app listening at https://localhost: " + port)
})