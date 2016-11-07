var http = require("http").createServer(server)

//Variável para carregar o arquivo HTML
var fs = require("fs")

//Função Server
function server (request, response){
    var url = request.url
    if(url=='/'){
        response.writeHead(200);
        response.end(fs.readFileSync("view/index.html"))
    }
    else{
	    resposta.writeHead(200);
        resposta.end("<h1>Error 404, Nada encontrado!</h1>");
    }
}

//Definição de porta
http.listen(7000,function(){
    console.log("Servidor em funcionamento!")
})
