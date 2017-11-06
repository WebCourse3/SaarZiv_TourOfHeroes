const express = require('express');
const app = express();
const heroesRouter = require("../js/heroesRouter");
const bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));
app.use(express.static('C:\\Users\\Jbt\\WebstormProjects\\Tour of Heroes\\public'));
app.use("/heroes",heroesRouter);



app.get('/', function (req, res) {  res.send('hello world')});

app.listen(3000,function() {
	console.log('Server started on port 3000');
});