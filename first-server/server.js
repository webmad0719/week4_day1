const http = require('http')
const port = 3000

const server =
    http.createServer((req, res) => {

        console.log(`Se ha accedido a la URL ${req.url}`)

        if (req.url === '/') {
            res.write('<h1>Esto es el homepage</h1>')
            res.end()
        } else if (req.url === '/productos') {
            res.write('Aquí vanm lso productos')
            res.end()
        } else if (req.url === '/contacto') {
            res.write('Esto es el formulario')
            res.end()
        } else {
            res.statusCode = 404
            res.write('¡OPS! Página no encontrada')
            res.end()
        }
    })

server.listen(port)