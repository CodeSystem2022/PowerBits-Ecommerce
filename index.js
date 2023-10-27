const express = require("express");

const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "db_ecommerce",
    user: "root",
    password: "admin"
});


app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("registro");
});    


app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000 para poder ver el login");
});

app.post("/validar", function(req, res){
    const datos = req.body;

    let dni = datos.dni;
    let nombre = datos.nombre;
    let apellido = datos.apellido;
    let correo = datos.correo;
    let password = datos.password;

    let registrar = "INSERT INTO tabla_usuarios(dni_usuario, nombre_usuario, apellido_usuario, correo_usuario, password_usuario) VALUES('"+dni+"', '"+nombre+"', '"+apellido+"', '"+correo+"', '"+password+"')";

    conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("Datos registrados con exito")
        }
    })
})