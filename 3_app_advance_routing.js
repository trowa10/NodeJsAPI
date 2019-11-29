const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

const data = require('./data');

router.get('/employees',(req, res) => res.send(data));

app.use('/api',router);

app.listen(port, () => console.info(`Server is uo on port ${port}`));
