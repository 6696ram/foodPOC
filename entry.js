const express = require('express');
const app = express();

const server = app.listen(3000,() => console.log('listening to the server on port'));

console.log("push into new branch");
 module.exports = server;