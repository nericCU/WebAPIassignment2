//Author: Eric Nguyen
//Last Edited: 3-20-2015
//Description: This is an Express application that creates a Node.js server
// 				to handle HTTP requests and responses. It shall have
//				four URNs [ /gets, /posts, /puts, /deletes] that only
//				accepts their respective HTTP methods. It shall reject
//				any other methods or requests made to the base URL.
//				If it accepts a valid request, it will respond with
//				the query parameters that are sent in.


// 1. core modules
//To use the HTTP server and client, one must require('http')
var http = require('http');

// 2. public modules from npm
// Express 4.x framework to provide easy HTTP methods
var express = require('express');

// Creates an Express application
var app = express();


// Reject any requests made to the base URL
app.all('/', function (req, res) {
	// respond with HTTP1.1 status code 403 - Forbidden
	// because server does not allow request to base URL
	res.status(403).send('Request Rejected: no URN specified');
});

// Accept GET requests made to /gets
app.all('/gets', function (req, res) {
    // if the request method is GET
  if(req.method == 'GET') {
	// if the request contains any query parameters
    if(Object.keys(req.query).length > 0) {
      res.send(req.query);
    // if the request was accepted but no query parameters were passed.
    } else {
      res.send('No query parameters were sent in.');
    }
    // The /get URN does not accept non-GET methods, reject request.
  } else {
    // FUTURE: respond with HTTP1.1 status code 405 - Method Not Allowed
    // NOW: HTTP 405 reponse must include an Allow-Header so just send 
    // HTTP 403 for now. Will update this when I have time.
    res.status(403).send('Request Rejected: HTTP Method not supported.');
  }
});

// Accept POST requests made to /posts
app.all('/posts', function (req, res) {
    // if the request method is POST
  if(req.method == 'POST') {
	// if the request contains any query parameters
    if(Object.keys(req.query).length > 0) {
      res.send(req.query);
    // if the request was accepted but no query parameters were passed.
    } else {
      res.send('No query parameters were sent in.');
    }
    // The /get URN does not accept non-POST methods, reject request.
  } else {
    // FUTURE: respond with HTTP1.1 status code 405 - Method Not Allowed
    // NOW: HTTP 405 reponse must include an Allow-Header so just send 
    // HTTP 403 for now. Will update this when I have time.
	res.status(403).send('Request Rejected: HTTP Method not supported.');
  }
});

// Accept PUT requests made to /puts
app.all('/puts', function (req, res) {
    // if the request method is PUT
  if(req.method == 'PUT') {
	// if the request contains any query parameters
    if(Object.keys(req.query).length > 0) {
      res.send(req.query);
    // if the request was accepted but no query parameters were passed.
    } else {
      res.send('No query parameters were sent in.');
    }
    // The /get URN does not accept non-PUT methods, reject request.
  } else {
    // FUTURE: respond with HTTP1.1 status code 405 - Method Not Allowed
    // NOW: HTTP 405 reponse must include an Allow-Header so just send 
    // HTTP 403 for now. Will update this when I have time.
	res.status(403).send('Request Rejected: HTTP Method not supported.');
  }
});

// Accept DELETE requests made to /deletes
app.all('/deletes', function (req, res) {
    // if the request method is DELETE
  if(req.method == 'DELETE') {
	// if the request contains any query parameters
    if(Object.keys(req.query).length > 0) {
      res.send(req.query);
    // if the request was accepted but no query parameters were passed.
    } else {
      res.send('No query parameters were sent in.');
    }
    // The /get URN does not accept non-DELETE methods, reject request.
  } else {
    // FUTURE: respond with HTTP1.1 status code 405 - Method Not Allowed
    // NOW: HTTP 405 reponse must include an Allow-Header so just send 
    // HTTP 403 for now. Will update this when I have time.
	res.status(403).send('Request Rejected: HTTP Method not supported.');
  }
});

// Reject all other requests coming in
// Express executes middleware functions in the order they are registered.
// Put this part last so it will still accept the above HTTP Methods.
app.all('*', function (req, res) {
    // FUTURE: respond with HTTP1.1 status code 405 - Method Not Allowed
    // NOW: HTTP 405 reponse must include an Allow-Header so just send 
    // HTTP 403 for now. Will update this when I have time.
  res.status(403).send('Request Rejected: URN does not support the HTTP Method.');
});

// Binds and listens for connections on the port 9000
var server = app.listen(9000, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Node.js server listening at http:%s:%s', host, port)
});
