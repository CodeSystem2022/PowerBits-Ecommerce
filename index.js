import mercadopago from "mercadopago"
import express from "express"
import path from "path"
import cors from "cors"
import mysql from "mysql"
import ejs from "ejs"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

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


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static('css'));
app.use('/imagenes', express.static('imagenes'));
app.use('/js', express.static('js'));

app.engine('html', ejs.renderFile);
app.set("view engine", 'html');

app.get("/", function(req,res){
    res.sendFile(__dirname + '/html/index.html');
});    

app.get("/carrito", function(req,res){
    res.sendFile(__dirname + '/html/carrito.html');
});    

app.get("/registro", function(req,res){
    res.render(path.join(__dirname, '/html', 'registro.html'), { mensajeError: false, mensajeSuccess: false});

});    

app.post("/crear-usuario", function(req, res){
    const datos = req.body;

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

app.post("/iniciar-sesion", function(req, res){
    const datos = req.body;

    let dni = datos.dni;
    let password = datos.password;
    let buscar = "SELECT * FROM tabla_usuarios WHERE dni = "+dni+" ";

    conexion.query(buscar, function(error, rows) {
        if (error) {
            res.status(500).json({ error: 'Error al buscar el usuario' });
        } else {
            console.log(rows)
            if (rows.length === 0) {
                //res.status(401).json({ error: 'Usuario no encontrado' });
                res.send("Usuario no encontrado")
                
            } else {
                const usuario = rows[0];
                if (usuario.password === password) {
                    
                    res.sendFile(path.join(__dirname, '/html/mp.html'));
                    
                } else {
                    //res.status(401).json({ error: 'Contraseña incorrecta' });
                    res.send("DNI y/o Contraseña incorrecta")
                    
                }
            }
        }
    })

})



app.post("/create_preference", (req, res) => {

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


app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
});