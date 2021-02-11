const mysql = require('mysql');
const mensagens = require('./src/models/mensagem')
const app = require('./src/config/server')
const connection = require('./src/config/connection')

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fseletro"
})

app.get( '/produtos', (req , res) => {
    const sql = "SELECT * FROM produtos JOIN categorias ON produtos.categoria = categorias.id"
    conn.query(sql, (error , result) => {
        if (result) {
            res.status(201).json(result)
        } else {
            res.json({"Message":"Erro ao conectar com o banco de dados"})
        }
    })
})

app.get( '/contato', async (req , res) => {
    const resultado = await mensagens.find()
    
     res.json(resultado)
})

app.post('/contato', async (req, res) => {
    const { nome, mensagem, } = req.body;
  
    let resultado = await mensagens.create({ nome, mensagem, });
     res.json(resultado);
  });

