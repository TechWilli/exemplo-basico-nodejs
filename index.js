// const fs = require('fs');
// let texto = process.argv[2];

// fs.writeFile('teste.txt', texto, (error) => {
//     if(error){
//         console.log('Houve um erro ao gravar o arquivo');
//     }else{
//         console.log('Gravei o arquivo');
//     }
// });

const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // é necessario criar uma constante de app em função
const fs = require('fs');

app.use(bodyParser.json());

// um app em post para mandar a requisição no servidor
// a barra depois do post é para a pessoa nao precisar digitar o site e acessar raiz na navegação
app.post('/', (req, res) => {
    resp.send(req.body);

});

//porta para escutar a requisição
app.listen(3000);
