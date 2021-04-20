const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/Contacto.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'Contacto.html'))
})
app.get('/Sobre.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'Sobre.html'))
})

app.listen(port, () => {
    console.log( `Example app listening at http://localhost:${port}` )
})