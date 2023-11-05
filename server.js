const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "<TEST-5724749239897490-092417-620cf9697d83c9d64b40c32a183b7dd6-446506212>",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));
app.use(cors());

app.get("/", function () {
	path.resolve(__dirname, "..", "client", "html", "index.html");
});

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
			res.json({
				id: response.body.id
			});
		})
        .catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(3000, () => {
	console.log("The server is now running on Port 3000");
});