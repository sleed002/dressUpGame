const port = process.env.PORT || 3000
const express = require('express');
const app = express();
var $ = require('jquery');

app.use(express.static('static'));
//body parser for pulling info from the templates

//set the view engine for the server
app.set('views', __dirname + '/static')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

//send the info to the port for display
app.listen(port, () => {
  console.log('Server is listening on Port ' + port)
})
