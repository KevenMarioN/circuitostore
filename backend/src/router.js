const express = require('express');
const router = express.Router();

const clients = require('./controllers/clientsController');
const products = require('./controllers/productsController');
const providers = require('./controllers/providersController');

const clientsController = new clients();
const productsController = new products();
const providersController = new providers();

router.get('/clients',clientsController.show);
router.post('/clients',clientsController.create);
router.put('/clients',clientsController.update);
router.delete('/clients',clientsController.delete);

router.get('/products',productsController.show);
router.get('/products/:id_product',productsController.showId);

router.get('/providers',providersController.show);

router.use((req,res,next) => {
    const erro = new Error('Not found');
    erro.status = 404;
    next(erro)
});

router.use((error,req,res,next) =>{
    res.status(error.status || 500).send({erro : { messagem : error.message}})
    next();
});


module.exports = router;