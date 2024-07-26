//INDEX.JS
//IMPORTAÇÕES
const express = require ("express");

//CORPO
//req = requisição
//res = resposta
const raiz = (req, res)=>{
    res.send ("Back End Ativo");
}

const interacao = (req, res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá ${nome}, você tem ${idade} anos');
}

    //CONFIGURAÇÃO HTTP
    const app = express();
    app.get("/", raiz);
    app.get("/interacao", interacao);

    //TESTE DO CONSOLE

app.listen(3000, ()=>{
    console.log("Respondendo na porta dos 3000");
})

//INDEX.HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="https://localhost:3000/interacao">

        <input type="text" name="nome" placeholder= "digite seu nome: ">
        <input type="number" name="idade" placeholder= "digite sua idade: ">
        <button type="submit">Enviar</button> 
    </form>
</body>
</html>
