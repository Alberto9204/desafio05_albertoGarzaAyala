const express = require('express')
const app = express()
const port = 8080

const productos = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('inicio', { productos })
})

app.get('/productosCargados.ejs', (req, res) => {
    res.render('productosCargados', { productos })
})

app.post('/productos', (req,res) =>{
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
})

app.post('/productosCargados.ejs', (req,res) =>{
    productos.push(req.body)
    console.log(productosCargados)
    res.redirect('/')
})

const server = app.listen(port, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('err', err =>{
    console.log('Error en servidor', err)
})