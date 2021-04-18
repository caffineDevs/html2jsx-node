const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const ReactDOMServer = require("react-dom/server");
var HTMLtoJSX = require('htmltojsx');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/convert", (req, res) => {
  let htmlInput = req.body.html;
  let converter = new HTMLtoJSX({
    createClass: false,
    outputClassName: 'AwesomeComponent'
  });
  let output = converter.convert(htmlInput);
  return res.status(200).json({
    success: true,
    jsx: output,
  });
});

app.listen(port);
