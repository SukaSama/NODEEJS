const express = require("express") //express vai criar um servidor para renderizar no navegador todos os arquivos js criados
const app = express() // instanciando o express na variável app

app.set("view engine", "ejs") //informando ao express que view engine (ferramenta pra renderizar html) utilizará o ejs

app.get("/", function(req, res){ //app.get cria uma rota (app chama o que está dentor do express e o get é um método do express) 
    res.render("index") // o res é de resposta, a resposta será renderizar o index nessa rota "/" (não precisa colocar o nome do arquivo com a extensão ".ejs" (index.ejs) porque já sinalizamos acima que vamos utilizar o ejs)
}) // necessário que o index.ejs esteja numa pasta chamada view

app.get("/sobre", function (req,res){//rota para renderizar a página "sobre"
    res.render("about")
})

app.listen(8080) //o app carrega tudo do express e o listen é uma função do express que fica ouvindo uma porta
                 // o servidor fica rodando em nossa máquina e qunado ouvir a porta 8080 executa este código deste arquivo server.js

console.log("Rodando")