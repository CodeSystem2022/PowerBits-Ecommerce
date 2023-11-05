
const botonMercadoPago = document.querySelector("#boton-mercado-pago");
let total = document.querySelector("#total"); // Agregado para corregir error

        botonMercadoPago.addEventListener("click", function () {
            botonMercadoPago.remove();
            var mensaje = document.getElementById('mensaje-pago');
            mensaje.innerHTML = 'PAGO'
            

            const orderData = {
                quantity: 1,
                description: "compra de ecommerce",
                price: total.innerText, // Agregado para corregir error
            };
            fetch("http://localhost:3000/create_preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (preference) {
                crearBotonMercadoPago(preference.id);
            })
            .catch(function () {
                alert("Error inesperado");
            });
        });

        function crearBotonMercadoPago(preferenceId) {
            // Inicializa el checkout de MercadoPago
            const bricksBuilder = mercadopago.bricks();

            const renderComponent = async (bricksBuilder) => {
                await bricksBuilder.create(
                    "Wallet",
                    "button-checkout", // class/id donde se mostrará el botón de pago
                    {
                        initialization: {
                            preferenceId: preferenceId,
                        },
                        callbacks: {
                            onError: (error) => console.error(error),
                            onReady: () => {},
                        },
                    }
                );
            }
            window.botonMercadoPago = renderComponent(bricksBuilder);
        }



        // }
        // const total = document.querySelector("#total"); // Agregado para corregir error
        // document.addEventListener("DOMContentLoaded", function () {
        //     const botonMercadoPago = document.querySelector("#boton-mercado-pago");
        
        //     botonMercadoPago.addEventListener("click", function () {
        //         botonMercadoPago.remove();
        
        //         const orderData = {
        //             quantity: 1,
        //             description: "compra de ecommerce",
        //             price: total.innerText, // Asegúrate de que 'total' esté definido en tu código.
        //         };
        
        //         // Realiza una solicitud para crear la preferencia de pago
        //         fetch("http://localhost:3000/create_preference", {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(orderData),
        //         })
        //             .then(function (response) {
        //                 return response.json();
        //             })
        //             .then(function (preference) {
        //                 crearBotonMercadoPago(preference.id);
        //             })
        //             .catch(function () {
        //                 alert("Error inesperado");
        //             });
        //     });
        
        //     function crearBotonMercadoPago(preferenceId) {
        //         // Crea el botón de pago de Mercado Pago
        //         const mp = new MercadoPago("TU_APP_ID"); // Reemplaza 'TU_APP_ID' con tu App ID de Mercado Pago.
        
        //         mp.checkout({
        //             preference: {
        //                 id: preferenceId,
        //             },
        //         });
        //     }
        // });