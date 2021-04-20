const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenido al inicio socio!')
})

app.get('/Sobre', (req, res) => {
    res.send('El mejor dealers de RD si de honda civic se habla!!')
})

app.get('/Producto', (req, res) => {
    res.send('Tenemos los mejores hondas civic')
})

app.get('/Contactos', (req, res) => {
    res.send('Tel: 829-648-3241 & email: jfgvseyfrf@gmail.com')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})