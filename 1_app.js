const http = require("http");
const url = require("url");

const data = require("./data");

function listAllEmployees(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}

function AddEmployee(req, res) {
  let body = "";
  req.on("data", chunk => body += chunk.toString());
  req.on("end", () => {
    data.push(JSON.parse(body));
    res.statusCode = 201;
    return res.end(`${JSON.parse(body).name} added`);
  });
  req.on("error", error => {
    res.statusCode = 400;
    return res.end(error);
  });
}

function defaultRoute(req, res) {
  res.statusCode = 404;
  res.end("Not Available!");
}

const server = http.createServer((req, res) => {
  const urlParts = url.parse(req.url);
  console.log(urlParts);
  if (urlParts.pathname === "/api/employees") {
    switch (req.method) {
      case "GET":
        listAllEmployees(req, res);
        break;
      case "POST":
        AddEmployee(req, res);
        break;
      default:
        AddEmployee(req, res);
        break;
    }
  } else {
    defaultRoute(req, res);
  }
});

server.listen(3000, () => console.info("is up 3000"));
