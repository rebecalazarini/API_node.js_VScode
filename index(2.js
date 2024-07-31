//IMPOORTAÇÕES
const express = require("express");
const porta = 3000;

//CORPO 
//req=requisição
//res=resposta
const raiz = (req, res) =>{
    res.send("Back-end Ativo")
}

//CONFIGURAR O HTTP
const app = express();
app.get("/", raiz);

//TESTE NO CONSOLE
app.listen(3000, ()=>{
    console.log("Respondendo na porta:", porta);
})
