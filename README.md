## Informacion 

| Datos| |
| ------ | ------ |
| Nombre | Lennin Stuardo Moscoso Martir |
| Carnet | 202003886 |
| Aux | Hector Josue Orozco Salazar |

## Fronted
Utilizando la tecnologia HTML/CSS/Javascript junto con el servicio de node.js se realizo el Proyecto 2 de IPC1.

##### Ejecutar proyecto:
- Encender api:
Por medio de el IDE de preferencia (Visual estudio Code fue utilizado) abrir la carpeta del proyecto y abrir la consola.
Usar los sigientes comandos:
    - cd Backend.
    - npm i.
    - npm run dev.
![Consola en visual studio code](https://github.com/LenStu/IPC12S2022-Proyecto2_202003886/blob/master/imagenes/consola_1.png)
![Servidor encendido](/imagenes/consola2.png)](https://github.com/LenStu/IPC12S2022-Proyecto2_202003886/blob/master/imagenes/consola_2.png)
Puede usar la extencion de visual studio Live Serve para ejecutar directamente el html .

- Inicio de sesion:
Ingrese su usuario y contraseña para poder ingresar.
![pagina de inicio](/imagenes/login1.png)](https://github.com/LenStu/IPC12S2022-Proyecto2_202003886/blob/master/imagenes/login_1.png)
![respuesta en caso de un dato erroneo](/imagenes/login2.png)](https://github.com/LenStu/IPC12S2022-Proyecto2_202003886/blob/master/imagenes/login_2.png)

- Home:
Posee una pagina inicial en la que estaran todos los jugadores.
![pagina de jugadores](/imagenes/buscador1.png)](https://github.com/LenStu/IPC12S2022-Proyecto2_202003886/blob/master/imagenes/buscador_1.png)
-Buscador:
Puede escoger entre tres tipos diferente de busqueda y una opcion para mostrarlos todos nuevamente despuestas de presionar el boton.
[pagina de jugadores](/imagenes/buscador2.png)](https://github.com/LenStu/IPC12S2022-Proyecto2_202003886/blob/master/imagenes/buscador_2.png)

## Backend

| Datos| |
| ------ | ------ |
| Modulo | Lennin Stuardo Moscoso Martir |
|Puerto utilizado  | 4000 |

| Requisitos del sistema | |
| ------ | ------ |
| Procesador  |  Intel Pentium |
|   RAM|  2 |
|  Sistema Operativo |  Windows 7 /MacOS / Linux |

##### Descripcion de Endpoints:
- Post /login
Se le solicita a la api buscar en la carpeta de backend el archivo usuario.json es cual posee los usuarios verficados y son guardado en sus respetivas variables, posteriormente se toma una variable booleana de valor inciacia false.

Se realiza un ciclo for pora recorrer el archivo .JSON y comprobar cada uno con el valor recibido desde el Frontend, en caso de tener una coincidencia se modificara la variable booleana y mandara dicha variable como respuesta.

- Post /busqueda
Se crea un archivo .JSON que posee los colores de cada seleccion que posteriormente sera utilizada como un complemento a la informacion de los jugadores.
Se le solicita a la api buscar en la carpeta de backend el archivo jugador.json es cual posee el tipo de busqueda y el texto escrtito con sus respetivos parametros, posteriormente se toma una variable la cual sera un array para guardar informacion.

Por medio de un ciclo if se toma el tipo de busqueda siendo estas por seleccion, region y nombre, se realiza un ciclo for para recorrer el archivo .JSON y combrobar si excite una coincidencia con los parametros ingresados en el Fronted, en caso de tener una coincidencia se modificara el array e ingresara todos los jugadores que correspondasn a la descripcion realizada e incorpora un color blanco por default.

En el caso de realizar una busqueda por seleccion se realiza una sentencia if la cual modificara el color por default y cambiara segun el color escrito en el archivo JSON dentro de este endpont.
