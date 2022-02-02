const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = 3000;

var cors = require("cors");
const bodyParser = require("body-parser");

const fs = require("fs");
const { exec } = require("child_process");
app.use(cors());

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(bodyParser.json());

app.use(express.static('public',{extensions:['html']}));

app.post("/api", async (req, res) => {
	console.log(req.body)
	try {
		var enda = `./api/${req.body.api}.js`
		let commandFile = require(enda);
		var tooez = await commandFile.run(req.body);
		res.json(tooez)
	} catch (err) {
		console.log(err);
		if (err.code === "MODULE_NOT_FOUND") {
			return;
		}
	}
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));