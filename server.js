const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/", function (req, res) {
  console.log(req.headers);

  res.header({
    "custom-header": "nuesto valor personalizado",
    "otro-header": "el otro header",
  });
  res.send("Lista de mensajes");
});

router.post("/message", function (req, res) {
  res.send("Hola desde post");
});

router.patch("/message", function (req, res) {
  res.send("Hola desde patch");
});

router.delete("/message", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.send("Mensaje " + req.body.text + " añadido correctamente");
});

// app.use("/", function (req, res) {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
