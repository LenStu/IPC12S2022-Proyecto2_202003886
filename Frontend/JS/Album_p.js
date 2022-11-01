window.addEventListener('load', function() {
  console.log('La página ha terminado de cargarse!!');
  var contenedor = document.getElementById('titulo');
  var usuario =  sessionStorage.getItem("USER");

  contenedor.innerHTML = `<h2> Bienvenido ${usuario} al album 2022<h2>`;
  busqueda(0,"");
});

function busqueda(tipo,parametro) {
  let data={
      "tipo":tipo,
      "parametro":parametro
  }
console.log(data);
  let url = 'http://localhost:4000/busqueda';

  fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
      }
  }
  )
      .then((res) => res.json())
      .catch(err => {
          alert("ocurrio un error")
      })
      .then(response => {

          var cadena = "<div class=\"row row-cols-1 row-cols-md-3 g-4\">"
          console.log(response)
          let jugadores = response.informacion_album
          let color = response.color
          console.log("jugadores",jugadores)
          for (let i = 0; i < jugadores.length; i++) {
              cadena += "<div class=\"col\">"

              cadena += "<div class=\"card\" style=\"background:"
              cadena += color
              cadena += ";\">"

              cadena += "<img src="
              cadena += jugadores[i].Imagen
              cadena += " class=\"card-img-top\">"

              cadena += "<div class=\"card-body\">"
              
              cadena+="<h5 class=\"card-title\">"
              cadena+=jugadores[i].Numero
              cadena+=" - "
              cadena+=jugadores[i].Nombre
              cadena+=" "
              cadena+=jugadores[i].Apellido
              cadena+="</h5>"

              cadena+="<p class=\"card-text\">"
              cadena+="Seleccion: "
              cadena+=jugadores[i].Seleccion
              cadena+="</br>"
              cadena+="Region: "
              cadena+=jugadores[i].Region
              cadena+="</p>"

              cadena+=" </div>"
              cadena+=" </div>"
              cadena+=" </div>"
          }
          cadena += "</div>"

          var panelRespuesta=document.getElementById("cartas")
          panelRespuesta.innerHTML=cadena
      })

}

function consultas(){
  let opcion=document.getElementById("floatingSelect").value
  let parametro= document.getElementById("Usuario_ini").value
  busqueda(opcion,parametro)
}