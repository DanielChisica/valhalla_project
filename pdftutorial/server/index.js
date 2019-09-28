const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors'); // esta libreria evita la restriccion de google

const cuerpopdf = require('./generador'); // en esta linea estamos almacenando los archichivos html

const app = express(); // en esta linea estamos incializaciando expres

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// en esta linea de codigo estamos recibiendo el post que viene desde axios de react
// en la linea 18 le estamos dando un nombre al archivo y estamos recibiendo los parametros de el stat de react
app.post('/generarpdf', (req, res) => {
    pdf.create(cuerpopdf(req.body), {}).toFile('tiquete.pdf', (err) => { 
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve()); // si no hay error en la creaccion se devuelve la promesa y es cuando react 
    });
});
// cuando se resuelve la promesa del lado de react y pues aqui se guarda el tiquete digamos que en el dirname de el cliente
app.get('/enviarpdf', (req, res) => {
    res.sendFile(`${__dirname}/tiquete.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));