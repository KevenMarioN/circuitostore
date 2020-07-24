class clientsController
{
    async show(req,res)
    {
        res.send({
            clients : 
            [
            {
            id : 0,
            name : "XXXXX XXXXX",
            nameMother : "XXX XXXXX",
            cpf : "xxx-xxx-xxx.xxx",
            rg : "xxx.xxx.xxx-xx",
            address : "Street XXXXX XXXXX",
            number : 0,
            district : "XXXX XXXX",
            year : "XX/XX/XXXX",
            number : "XXXXXXXXXXX",
            obs : "xxxxxxxxxxxxxx"
            }
            ]   
        })
    }

    async create(req,res)
    {
        const 
        {
            
            name,
            nameMother,
            cpf,
            rg,
            address,
            number,
            district,
            year,
            obs 
        } = req.body; 
    }

    async update(req,res){
        res.send(
            {messagem : "Client update"}
        )
    }
    async delete(req,res){
        res.send(
            {messagem : "Client deleted"}
        )
    }
}

module.exports = clientsController;