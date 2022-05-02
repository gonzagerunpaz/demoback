
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

/* Esto es para que interprete que la informacion que me llege en el cuerpo del request es json*/
app.use(express.json())
app.use(cors())

const libros = []



app.get('/libros', (req, res) => {
    res.status(200).json(libros)
})

app.get('/libros/:id', (req, res) => {
    const idx = libros.findIndex(l => l.id == req.params.id)
    if (idx>=0) {
        res.status(200).json(libros[idx])
    } else {
        res.status(404).json( {descripcion: "No encontre el libro: " + req.params.id })
    }
})



app.delete('/libros/:id', (req, res) => {
    const idx = libros.findIndex(l => l.id == req.params.id)
    if (idx>=0) {
        libros.splice(idx, 1)
        res.status(200).json({descripcion: "El libro " + req.params.id + " se borro correctamente"})
    } else {
        res.status(404).json( {descripcion: "No pude borrar el libro px no existe: " + req.params.id })
    }
})

app.post('/libros', (req, res) => {
    const ids = libros.map( e => e.id)
    const id = Math.max(...ids)   
    const libro = {
        id: libros.length==0 ? 1 : id + 1,
        nombre: req.body.nombre,
        edicion: req.body.edicion,
        activo : true
    }
    libros.push(libro)
    res.status(201).json(libro)
})

app.put('/libros', (req, res) => {
    
    const id = req.body.id
    console.log(id)
    const idx = libros.findIndex(l => l.id == id)
    if (idx>=0) {
        const libro = libros.find( l => l.id == id)
        libro.nombre = req.body.nombre
        libro.edicion = req.body.edicion
        libro.activo = req.body.activo
        libros.splice(idx,1,libro)
        res.status(200).json(libro)
   } else {
        res.status(404).json( {descripcion: "No pude modificar el libro px no existe: " + id })
    }

})

app.listen(PORT , () => {
    console.log(`La aplicacion arranco en el puerto ${PORT} guenisimo`)
})