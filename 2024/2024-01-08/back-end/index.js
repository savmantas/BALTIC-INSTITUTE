//console.log('Hello world');

//const atimti = require('./minus-module')
//const sum = require('./math-module')

//console.log(atimti(5,4));
//console.log(sum(5,4));

const http = require("http");

const server = http.createServer((req, res) => {

if(req.url ==='/'){
    req.setHeader('Accses')
res.write('Tai yra mano atsakymas')
res.end()
}
});
server.listen(3000);
console.log("Server is started on port 3000");
