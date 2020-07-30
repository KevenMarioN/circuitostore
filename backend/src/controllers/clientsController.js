const mysql = require ('../database/mysql').pool;
const yup = require('yup');

function dateToEN(date)
{	
	return date.split('/').reverse().join('-');
}

const clientsValidate = yup.object().shape({
    name : yup.string().min(10).max(100).required(),
    nameMother: yup.string().min(10).max(100).required(),
    cpf : yup.string().min(14).max(15).required(),
    rg : yup.string().min(14).max(15).required(),
    numberPhone :yup.string().min(14).max(20).required(),
    address : yup.string().min(10).max(100).required(),
    number : yup.number().required(),
    district : yup.string().min(10).max(50).required(),
    year : yup.date().required(),
    obs : yup.string(),
    


}) 

class clientsController
{
    async show(req,res)
    {
       mysql.getConnection((error,conn) =>{
           if(error) { return res.status(500).send({error : error})}
            conn.query(
                'SELECT * FROM clients',
                (error,resultado,field) => {
                    conn.release();

                    if(error) {  return res.status(500).send({error : error,response:null})}

                    res.status(200).send({clients : resultado});
                }
            )
       });
    }

    async create(req,res)
    {
        const 
        {
            name,
            nameMother,
            cpf,
            rg,
            numberPhone,
            address,
            number,
            district,
            year,
            obs 
        } = req.body;
        //year = year.split("-").reverse().join("-");
        
        try
        {
            await clientsValidate.validate(req.body,{abortEarly :false})
            mysql.getConnection((error,conn) =>{
                if(error) { return res.status(500).send({error : error})}
                
                 conn.query(
                     'INSERT INTO clients (name, nameMother, cpf, rg, address, `number`, district, yearbrith, obs, numberPhone) VALUES (?,?,?,?,?,?,?,?,?,?)',
                     [name,nameMother,cpf,rg,address,number,district, year.split("-").reverse().join("-"), obs,numberPhone],
                     (error,resultado,field) => {
                         conn.release();
     
                         if(error) {  return res.status(500).send({error : error,response:null})}
     
                         res.status(200).send({id : resultado.insertId,messagem :"Cliente criado com sucesso!"});
                     }
                 )
            });
        } catch (error) {
            return res.status(400).send({error:error})
        }
        
    }

    async update(req,res){
        res.send(
            {messagem : process.env.MYSQL_USER}
        )
    }
    
    async delete(req,res){
        res.send(
            {messagem : "Client deleted"}
        )
    }
}

module.exports = clientsController;