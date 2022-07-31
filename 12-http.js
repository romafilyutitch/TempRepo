const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is out short history');
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We can't seem to find the page yor're logging for </p>
    <a href="/">Back home</a>`);
});
server.listen(5000);