const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	  res.send("Hello from GCP Cloud Run ");
});

app.listen(PORT, () => {
	  console.log(`App running on port ${PORT}`);
});const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
	  res.send("Hello from GCP Cloud Run ");
});

app.listen(PORT, () => {
	  console.log(`App running on port ${PORT}`);
});
