class providersController {
    async show (req,res)
    {
        res.send({
            id : 0,
            nameProviders : "Crook",
            cnpj : "",
            number : "xx x xxxx-xxxx",
            adress : "",
            district : "",
            adressNumber : 5000
        })
    }
}

module.exports = providersController;