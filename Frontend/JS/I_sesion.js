const { response } = require("express");

var btn = document.getElementById('Ingreso_user');

function iniciando() {

    let url = 'http://localhost:4000/login';

    var text1 = document.getElementById('Usuario_ini').value;
    var text2 = document.getElementById('Contra_ini').value;

    var Usuario = '';
    var Password = '';

    var data = {
        Usuario: text1,
        Password: text2
    }

    console.log(data);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }}
    )
        .then((res) => res.json())
        .catch(err => {
            alert("ocurrio un error")
        })
        .then(response => {
            if (Boolean(response.respuesta)) {
                sessionStorage.setItem('USER',text1)
                location.href = "home.html";
            }
            else {
                alert("credenciales incorrectas")
            }
        })

}