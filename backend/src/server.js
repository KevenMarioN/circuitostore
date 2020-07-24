const express = require('express');
const router = require('./router');
const morgan = require('morgan');
const port = process.env.PORT || 3333;
app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(router);

app.listen(port);

console.log(`\n\nServer running in port ${port} !`)