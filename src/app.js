const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({extended:true})); // evita problemas con url Bodyparcer

const mainController = require("./controllers/mainController");

app.use(require("./routes/mainRoutes"));

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3030");
  });

