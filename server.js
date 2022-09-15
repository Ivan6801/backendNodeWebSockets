const express = require("express");
const bodyParser = require("body-parser");
const response = require("./network/response");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  response.success(req, res, "Creado corretamente");
});

router.patch("/message", function (req, res) {
  res.send("Hola desde patch");
});

router.delete("/message", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send({ error: "", body: "Creado correctamente" });
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
