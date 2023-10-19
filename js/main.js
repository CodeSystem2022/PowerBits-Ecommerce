// Productos del Ecommerce
// El siguiente array va a tener todos los productos disponibles en el Ecommerce,
// este va a estar dividido en categorias que luego se van a ir completando

const productos = [
    // PERIFERICOS
    // Teclados
    {
        id: "teclado_1",
        nombre: "Teclado Mecanico HyperX Alloy CORE RGB LA",
        imagen: "/imagenes/perifericos/teclado_1.webp",
        categoria: {
            nombre: "Perifericos",
            id: "Perifericos"
        },
        precio: 33900
    },
    {
        id: "teclado_2",
        nombre: "Teclado Mecanico Redragon Dark Avenger K568 RGB Switch Red",
        imagen: "/imagenes/perifericos/teclado_2.webp",
        categoria: {
            nombre: "Perifericos",
            id: "Perifericos"
        },
        precio: 31000
    },
    // Mouse
    {
        id: "mouse_1",
        nombre: "Mouse Glorious Model O Minus (Glossy White)",
        imagen: "/imagenes/perifericos/mouse_1.webp",
        categoria: {
            nombre: "Perifericos",
            id: "Perifericos"
        },
        precio: 21990
    },
    {
        id: "mouse_2",
        nombre: "Mouse Logitech G203 Lightsync RGB Black",
        imagen: "/imagenes/perifericos/mouse_2.webp",
        categoria: {
            nombre: "Perifericos",
            id: "Perifericos"
        },
        precio: 20000
    },
    // Auriculares
    {
        id: "auricular_1",
        nombre: "Auriculares HyperX Cloud Flight Black Wireless",
        imagen: "/imagenes/perifericos/auricular_1.webp",
        categoria: {
            nombre: "Perifericos",
            id: "Perifericos"
        },
        precio: 20000
    },
    // Sillas
    {
        id: "silla_1",
        nombre: "Silla Gamer Checkpoint FIFA MT-2000 Qatar",
        imagen: "/imagenes/Sillas/silla_1.webp",
        categoria: {
            nombre: "Sillas",
            id: "Sillas"
        },
        precio: 175000
    },
    {
        id: "silla_2",
        nombre: "Silla Gamer Vertagear Racing Series PL-4500 Crystals from Swarovski",
        imagen: "/imagenes/Sillas/silla_2.webp",
        categoria: {
            nombre: "Sillas",
            id: "Sillas"
        },
        precio:  533350
    },
    // Coolers
    {
        id: "cooler_1",
        nombre: "Cooler Fan Cooler Master MF120 S3",
        imagen: "/imagenes/Componentes/cooler_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio: 8900
    },
    // Discos
    {
        id: "disco_1",
        nombre: "Disco Sólido SSD Kingston 480GB A400 500MB/s",
        imagen: "/imagenes/Componentes/disco_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio: 21700
    },
    // Fuentes
    {
        id: "fuente_1",
        nombre: "Fuente ASUS ROG STRIX 1000W 80 Plus Gold Full Modular 1000G",
        imagen: "/imagenes/Componentes/fuente_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio: 140000
    },
    {
        id: "fuente_2",
        nombre: "Fuente Gigabyte 650W 80 Plus Bronze P650B",
        imagen: "/imagenes/Componentes/fuente_2.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio: 57900
    },
    //Memorias
    {
        id: "memoria_1",
        nombre: "Memoria Crucial DDR4 8GB 2666MHz",
        imagen: "/imagenes/Componentes/memoria_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio: 20199
    },
    {
        id: "memoria_2",
        nombre: "Memoria Team DDR4 32GB 2666MHz T-Force Delta RGB",
        imagen: "/imagenes/Componentes/memoria_2.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio: 75000
    },
    // Motherboard
    {
        id: "placa_madre_1",
        nombre: "Mother ASUS PRIME A320M-K AM4",
        imagen: "/imagenes/Componentes/placa_madre_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:  77999
    },
    {
        id: "placa_madre_2",
        nombre: "Mother ASUS ROG STRIX B550-F GAMING WIFI II",
        imagen: "/imagenes/Componentes/placa_madre_2.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:  190000
    },
    // Placas de Video
    {
        id: "placa_video_1",
        nombre: "Placa de Video Asrock Radeon RX 5500 XT 8GB GDDR6 CHALLENGER D OC",
        imagen: "/imagenes/Componentes/placa_video_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:  204200
    },
    {
        id: "placa_video_2",
        nombre: "Placa de Video ASUS GeForce GTX 1650 4GB GDDR6 Phoenix EVO OC",
        imagen: "/imagenes/Componentes/placa_video_2.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:   159290
    },
    {
        id: "placa_video_3",
        nombre: "Placa de Video XFX Radeon RX 7900 XTX 24GB GDDR6 SPEEDSTER MERC 310  ",
        imagen: "/imagenes/Componentes/placa_video_3.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:   1335900
    },
    {
        id: "placa_video_4",
        nombre: "placa de video ZOTAC Gaming GeForce RTX 4090 AMP Extreme AIRO 24GB  ",
        imagen: "/imagenes/Componentes/placa_video_4.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:   1240000
    },
    // Procesadores
    {
        id: "procesador_1",
        nombre: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4",
        imagen: "/imagenes/Componentes/procesador_1.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:   550000
    },
    {
        id: "procesador_2",
        nombre: "Procesador Intel Core i9 13900KF 5.8GHz Turbo ",
        imagen: "/imagenes/Componentes/procesador_2.webp",
        categoria: {
            nombre: "Componentes",
            id: "Componentes"
        },
        precio:   554250
    },
    // Monitores
    {
        id: "monitor_1",
        nombre: "Monitor Gamer ViewSonic 24.5 XG251G 360Hz IPS",
        imagen: "/imagenes/Monitores/monitor_1.webp",
        categoria: {
            nombre: "Monitores",
            id: "Monitores"
        },
        precio:   600000
    },
    {
        id: "monitor_2",
        nombre: "Monitor Philips 19 HDMI VGA",
        imagen: "/imagenes/Monitores/monitor_2.webp",
        categoria: {
            nombre: "Monitores",
            id: "Monitores"
        },
        precio:    60000
    },
    // Notebooks
    {
        id: "notekook_1",
        nombre: "Notebook Gamer Acer Nitro 5  FHD Core I5 11400H 8GB 512GB SSD NVMe RTX 3050 W11 144hz",
        imagen: "/imagenes/Notebooks/notebook_1.webp",
        categoria: {
            nombre: "Notebooks",
            id: "Notebooks"
        },
        precio:    750000
    },

    // Aca se completaran las otras categorias
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProdutos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">AGREGAR AL CARRITO</button>
            </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

//cargarProdutos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            console.log(productoCategoria);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProdutos(productosBoton);

        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProdutos(productos);
        }

    })
});
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const IdBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === IdBoton);

    if(productosEnCarrito.some(producto => producto.id === IdBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === IdBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }    
    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}