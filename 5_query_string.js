const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

const data = require("./data");

router.get("/employees", (req, res) => {
  //req.query allow as to access the query parameter from the request.
  console.log(req.query);
  return res.send(data);
});

app.use("/api", router);
app.listen(port, () => console.info(`Server is uo on port ${port}`));
