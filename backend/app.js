const express = require('express');
const router = require('./src/router');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3000;


app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

app.listen(port);

console.log(`\n\nServer running in port ${port} !`)