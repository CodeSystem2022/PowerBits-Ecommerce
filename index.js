const express = require("express");
const path = require("path");
const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "db_ecommerce",
    user: "root",
    password: ""
});


app.set("view engine");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static('css'));
app.use('/imagenes', express.static('imagenes'));
app.use('/js', express.static('js'));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/html/index.html');
});    

app.get("/carrito", function(req,res){
    res.sendFile(__dirname + '/html/carrito.html');
});    

app.get("/registro", function(req,res){
    res.sendFile(__dirname + '/html/registro.html');
});    

app.post("/crear-usuario", function(req, res){
    const datos = req.body;

    let dni = datos.dni;
    let nombre = datos.nombre;
    let apellido = datos.apellido;
    let correo = datos.correo;
    let password = datos.password;


    let buscar = "SELECT * FROM tabla_usuarios WHERE dni_usuario = "+dni+" ";

    conexion.query(buscar, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length > 0){
                //console.log("No se puede registrar, usuario ya existe");
                res.send("No se puede registrar, usuario ya existe");
                
            }else{

                let registrar = "INSERT INTO tabla_usuarios(dni_usuario, nombre_usuario, apellido_usuario, correo_usuario, password_usuario) VALUES('"+dni+"', '"+nombre+"', '"+apellido+"', '"+correo+"', '"+password+"')";

                conexion.query(registrar, function(error){
                    if(error){
                        throw error;
                    }else{
                        //console.log("Datos registrados con exito")
                        res.send("Datos registrados con exito")
                        
                    }
                });

            }
        }

    });
})

app.post("/iniciar-sesion", function(req, res){
    const datos = req.body;

    let dni = datos.dni;
    let password = datos.password;

    let buscar = "SELECT * FROM tabla_usuarios WHERE dni_usuario = "+dni+" ";

    conexion.query(buscar, function(error, rows) {
        if (error) {
            res.status(500).json({ error: 'Error al buscar el usuario' });
        } else {
            if (rows.length === 0) {
                //res.status(401).json({ error: 'Usuario no encontrado' });
                res.send("Usuario no encontrado")
                
            } else {
                const usuario = rows[0];
                if (usuario.password_usuario === password) {
                    //res.status(200).json({ message: 'Inicio de sesión exitoso' });
                    res.send("Inicio de sesión exitoso")
                    
                    
                } else {
                    //res.status(401).json({ error: 'Contraseña incorrecta' });
                    res.send("DNI y/o Contraseña incorrecta")
                    
                }
            }
        }
    })

})


app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
});