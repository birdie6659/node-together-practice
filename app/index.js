const express = require('express');
const app = express();

app.get('/', function(request, response) {
	response.send('I\'m so sleepy');
});

module.exports = app;