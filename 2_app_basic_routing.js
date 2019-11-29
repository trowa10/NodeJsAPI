const express = require("express");
const http = require("http");
const url = require("url");

const app = express();
// app.get('/api/employees', (req, res) => res.send('Hello world!'));
// app.post('/api/employees', (req, res) => res.send('HTTP Post!'));

//handle request based in http method
// app.all('/api/employees', (req, res) => res.send(`${req.method} in action`));

app.route('/api/employees')
.get((req, res) => res.send('Get!'))
.post( (req, res) => res.send('POST!'));

const port = 3000;

app
  .route("/api/employees")
  .get((req, res) => res.send("GET"))
  .post((req, res) => res.send("POST"));

app.listen(port, () => console.info(`Server is uo on port ${port}`));
