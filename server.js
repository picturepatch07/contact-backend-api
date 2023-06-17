const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
