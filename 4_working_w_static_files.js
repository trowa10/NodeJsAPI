const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

const data = require('./data');

router.get('/employees',(req, res) => res.send(data));
app.use('/api',router);

//static files 
//http://localhost:3000/Lighthouse.jpg
//app.use(express.static('images'));

//static file with path
//http://localhost:3000/static/Lighthouse.jpg
app.use('/static',express.static('images'));

app.listen(port, () => console.info(`Server is uo on port ${port}`));
