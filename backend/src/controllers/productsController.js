class productsController {
    async show (req,res)
    {
        res.send({
            id : 0,
            productName : "Calça Crook",
            amount : 1000,
            price : 89.90,
            category : 1,
            provider : 5,
            discountMax : "20%",
        })
    }
    async showId(req,res,next)
    {
        const id_product = req.params.id_product;
        if(id_product === "dinheiro")
        {
            res.status(302).send({
                message : `Você selecionou ${id_product}`
            })
        } else {
        res.status(404).send({
            message : `Você selecionou ${id_product}`
        })
    }
        next(); 
    }
}

module.exports = productsController;