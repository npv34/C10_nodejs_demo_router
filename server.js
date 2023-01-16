const http = require('http');
const PORT = 8000;
const url = require('url');
const qs = require('qs');
const {showHomePage} = require("./handle");

const server = http.createServer((req, res) => {
    let cUrl = url.parse(req.url);
    let cPath = cUrl.pathname;
    let cMethod = req.method;
    console.log(req.headers)

    // router
    switch (cPath) {
        case '/':
            showHomePage(req, res)
            break;
        case '/search':
            let cQuery = qs.parse(cUrl.query);
            console.log(cQuery);
            res.end()
            break;
        case '/home':
            res.end('page home')
            break;
        default:

    }




})

server.listen(PORT, 'localhost', () => {
    console.log('server listening on port: ' + PORT)
})
