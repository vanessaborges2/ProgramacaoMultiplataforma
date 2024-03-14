const fs = require('fs');
const express = require('express');
const urlEncodedParser = express.json();
const app = express()

app.listen(8080, () => {
    console.log("Servidor iniciado!");
});

//Rota para acessar a página de login
app.get("/", (req, res)=> {
    fs.readFile("src/login.html", (e, dados)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(dados);
        res.end();
    });
});

app.post("/acessar", urlEncodedParser, (req, res)=>{
    res.redirect("/principal");
});

app.get("/principal", (req,res)=>{
    fs.readFile("src/principal.html", (e, dados)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(dados);
        res.end();
    });
});

app.get("/livros", (req, res)=>{
    fs.readFile("src/livros.html", (e, dados)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(dados);
        res.end();
    });
});

app.get("/livros/novo", (req, res)=>{
    fs.readFile("src/novo_livro.html", (e, dados)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(dados);
        res.end();
    });
});