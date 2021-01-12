const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

const extendedTemplates = require("./data/extendedTemplate");
const templates = require("./data/templates");

app.use(bodyParser.json());
app.use(cors());

app.get("/api/templates", (req, res) => {
  res.status(200).send({
    templates: templates
  });
});

app.get("/api/extendedTemplates", (req, res) => {
  res.status(200).send({
    extendedTemplates: extendedTemplates
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
