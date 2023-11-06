const mercadopago = new MercadoPago("TEST-eb9e3b10-4ef3-4df2-9d67-ad8968933c19", {
    locale: 'es-AR'
});

const botonMercadoPago = document.querySelector("#checkout-btn");
let total = document.querySelector("#total"); // Agregado para corregir error
    

    
            const orderData = {
                quantity: 1,
                description: "compra de ecommerce",
                price: 100, // Agregado para corregir error
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

        function crearBotonMercadoPago(preferenceId) {
            // Inicializa el checkout de MercadoPago
            const bricksBuilder = mercadopago.bricks();

            const renderComponent = async (bricksBuilder) => {
                if (window.checkoutButton) window.checkoutButton.unmount()
                await bricksBuilder.create(
                    "wallet",
                    "boton-checkout", // class/id donde se mostrará el botón de pago
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
            window.checkoutButton = renderComponent(bricksBuilder)
        }
