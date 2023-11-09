//Importaciones de Módulos
import mercadopago from "mercadopago" //Módulo de mercado pago para interactuar con su api
import express from "express" //Framework web para Node.js, simplifica la creación de app web
import path from "path" //Módulo Node.js para trabajar con rutas de archivos y directorios
import cors from "cors" //
import mysql from "mysql" //Módulo para interactuar con bases de datos Mysql
import ejs from "ejs" //Motor de plantillas para generar vistas dinámicas
import session from 'express-session' //Middleware para manejar sesiones en Express
import { fileURLToPath } from 'url'; //Función para convertir una URL de archivo en una ruta de sistema de archivo

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

//Conexión a la base de datos
let conexion = mysql.createConnection({
    host: "localhost",
    database: "login-ecommerce",
    user: "root",
    password: "root"
});

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-1315058753464674-033121-7e70bf4364dd724c138a8beff182749a-129106746",
});

//Se crea una aplicación Express
//Se configura varios middlewares para manejar solicitudes JSON, URL codificadas,
//archivos estáticos(CSS,imágenes, JavaScript), y pata usar el motor de plantillas EJS.
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static('css'));
app.use('/imagenes', express.static('imagenes'));
app.use('/js', express.static('js'));

app.engine('html', ejs.renderFile);
app.set("view engine", 'html');
app.use(session({
    secret: 'my-secret',
    resave: true,
    saveUninitialized: true
}))

app.get("/", function(req,res){ //Muestra la página de incio(index.html)
    res.sendFile(__dirname + '/html/index.html');
});    

app.get("/carrito", function(req,res){ //Muestra la página del carrito de compras(carrito.html)
    res.sendFile(__dirname + '/html/carrito.html');
});    

app.get("/registro", function(req,res){ //Muestra la página de registro de usuario(registro.html)
    req.session.total=req.query.total
    res.render(path.join(__dirname, '/html', 'registro.html'), { mensajeError: false, mensajeSuccess: false});
});    

app.post("/crear-usuario", function(req, res){ //Procesa el formulario de registro de usuario, verifica
    const datos = req.body;                    //si el usuario ya existe en la base de datos y lo
                                               //registra si no.
    let dni = datos.dni;
    let nombre = datos.nombre;
    let apellido = datos.apellido;
    let correo = datos.correo;
    let password = datos.password;

    let buscar = "SELECT * FROM tabla_usuarios WHERE dni = "+dni+" ";
    let mensaje
    conexion.query(buscar, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length > 0){
                mensaje = 'No se puede registrar, usuario ya existe'
                res.render(path.join(__dirname, '/html', 'registro.html'), {mensajeError: mensaje, mensajeSuccess: false,});
                
            }else{

                let registrar = "INSERT INTO tabla_usuarios(dni, nombre, apellido, correo, password) VALUES('"+dni+"', '"+nombre+"', '"+apellido+"', '"+correo+"', '"+password+"')";

                conexion.query(registrar);
                mensaje = 'Se ha registrado con éxito'
                res.render(path.join(__dirname, '/html', 'registro.html'), {mensajeSuccess: mensaje, mensajeError: false,});
            }
        }

    });
})

app.post("/iniciar-sesion", function(req, res){ //Procesa el formulario de inicio de sesión,
    const datos = req.body;                     //verifica las credenciales del usuario en la 
                                                //base de datos y permite el acceso si son correctas.
    let dni = datos.dni;
    let password = datos.password;
    let buscar = "SELECT * FROM tabla_usuarios WHERE dni = "+dni+" ";
    let mensaje;

    conexion.query(buscar, function(error, rows) {
        if (error) {
        
            mensaje = 'Error al buscar el usuario'
            res.render(path.join(__dirname, '/html', 'registro.html'), {mensajeError: mensaje, mensajeSuccess: false,});
        
        } else {
            console.log(rows)
            if (rows.length === 0) {
                
                mensaje = 'Usuario no encontrado'
                res.render(path.join(__dirname, '/html', 'registro.html'), {mensajeError: mensaje, mensajeSuccess: false,});
                
            } else {
                const usuario = rows[0];
                if (usuario.password === password) {
                    
                    res.render(path.join(__dirname, '/html', 'mp.html'), {total: req.session.total});

                } else {

                    mensaje = 'DNI y/o Contraseña incorrecta'
                    res.render(path.join(__dirname, '/html', 'registro.html'), {mensajeError: mensaje, mensajeSuccess: false,});
                    
                }
            }
        }
    })

})



app.post("/create_preference", (req, res) => { //Crea una preferencia de pago utilizando la API
                                               //de MercadoPago y devuelve el ID de la preferencia.
	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3000",
			"failure": "http://localhost:3000",
			"pending": "",
		},
		auto_return: "approved",
	};

    mercadopago.preferences
		.create(preference)
		.then(function (response) {
			return res.json({
				id: response.body.id
			});
		})
        .catch(function (error) {
			console.log(error);
		});
});

//El servidor se crea y escucha en localhost:3000
app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
});