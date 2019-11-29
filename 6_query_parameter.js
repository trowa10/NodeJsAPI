const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

const data = require("./data");

//:id think it as variable
router.get("/employees/:id", (req, res) => {
  const id = +req.params.id; //+ convert string to integer
  const employee = data.filter(d => d.id === id);
  console.log(req.params.id);
  return res.send(employee);
});

app.use("/api", router);
app.listen(port, () => console.info(`Server is uo on port ${port}`));
