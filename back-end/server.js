const { port } = require("./config.js");
const express = require("express");
const passport = require("passport");
const app = express();
app.use(express.json());
app.use(passport.initialize());

// const cors = require("cors");
// app.use(cors());

app.use("/auth", require("./routes/auth"));

app.use((req, res) => {
	const msg = `Page not found: ${req.url}`;
	console.warn(msg);
	res.status(404).send(msg);
});

app.listen(port, () => {
	console.log(`API avalable on http://localhost:${port}`);
});
