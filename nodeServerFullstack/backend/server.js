import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fseletro"
})

server.get( '/produtos', (req , res) => {
    const sql = "SELECT * FROM produtos JOIN categorias ON produtos.categoria = categorias.id"
    conn.query(sql, (error , result) => {
        if (result) {
            res.status(201).json(result)
        } else {
            res.json({"Message":"Erro ao conectar com o banco de dados"})
        }
    })
})

server.get( '/contato', (req , res) => {
    const sql = "SELECT * FROM comentarios"
    conn.query(sql, (error , result) => {
        if ( result ) {
            res.status(201).send(result)
        } else {
            res.json({"Message":"Não foi possível realizar o contato"})
        }
    })
})

server.post( '/contato', (req , res) => {
    const { nome, mensagem } = req.body 
    const sql = `INSERT INTO comentarios (nome , mensagem) values ('${nome}' , '${mensagem}')`
    conn.query(sql, (error , result) => {
        if ( result ) {
            res.status(201).json(result)
        } else {
            res.json({"Message":"Não foi possível registrar o comentário"})
        }
    })
})


server.listen(3333)