const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port',4000);

app.use(morgan('dev')); 
app.use(express.json()); 
app.use(cors());


app.post("/login", (req, res) => {

    var Listado = require("./usuario.json");
    var user = req.body.Usuario;
    var pass = req.body.Password;
    var retorno = false;
    for (let i=0;i<Listado.length;i++){
        if (Listado[i].Usuario==user && Listado[i].Password==pass){
            retorno=true;
            break;
        }
    }    

    retorno1 = {
        "respuesta": retorno
    }
    res.send(retorno1);
});

app.post("/busqueda", (req, res) => {
    let colores = {
        "Argentina": "skyblue",
        "Esania": "red",
        "Catar": "purple",
        "Nigeria": "green"
    }  
    let colorDefault = "white"
    var Listado = require("./jugador.json");
    var tipoBusqueda = req.body.tipo;
    var parametro = req.body.parametro;
    var retorno = [];

    if (tipoBusqueda == 0){
        retorno=Listado
    }
    else if (tipoBusqueda == 1) {
        for (let i = 0; i < Listado.length; i++) {
            if (Listado[i].Seleccion == parametro) {
                retorno.push(Listado[i])
            }
        }
        if (retorno.length > 0) {
            colorDefault = colores[parametro]
        }
    }
    else if (tipoBusqueda == 2) {
        for (let i = 0; i < Listado.length; i++) {
            if (Listado[i].Region == parametro) {
                retorno.push(Listado[i])
            }
        }        
    }
    else {
        for (let i = 0; i < Listado.length; i++) {
            if (Listado[i].Nombre == parametro) {
                retorno.push(Listado[i])
            }
        }
    }

    retorno2 = {
        "informacion_album": retorno,
        "color": colorDefault
    }
    res.send(retorno2);
});

app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: '+app.get('port'));
});

