// importando a biblioteca "pg" pg e uma biblioteca do node para trabalhar com postgres
const Client = require('pg').Client 

//iniciar a conexão com banco de dados postegres
const cliente = new Client({
    user: "postgres",
    password: "101010",
    host: "127.0.0.1" ,
    port: 5432,
    database: "pse_base"
})

getpse()
async function getpse(){
    try{
 console.log("iniciando a conexão.")
 await cliente.connect()
 console.log("conexão bem sucedida")
 const resultado = await cliente.query("SELECT * FROM public.banco_pse")
 console.table(resultado.rows) 
}  
catch{
    console.error("aplicação com erro no get ")
}

finally{
    await cliente.end()
    console.log("cliente desconectado")
}
}
const express = require("express")

const app = express()

//app.post("/pse" , (req , res)=>{
    req.query(resultado)
//})
app.get("/pse", (req, res)=>{
    res.json(resultado.rows)
})
app.listen(3000)
