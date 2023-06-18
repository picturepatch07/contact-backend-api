const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnections");

// Connect to the database
connectDB();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
