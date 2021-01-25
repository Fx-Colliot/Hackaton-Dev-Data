const express = require("express");
const { backPort } = require("./config");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

// 404 Error

app.use((req, res) => {
	const msg = `Page not found: ${req.url}`;
	console.warn(msg);
	res.status(404).send(msg);
});

// Port

app.listen(backPort, () => {
	console.log(`API root available at: http://localhost:${backPort}/`);
});
