const fs = require('fs');
const urlEncodedParser = require('body-parser');
const express = require('express');
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

