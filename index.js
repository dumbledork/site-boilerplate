var favicon = require('serve-favicon');
var express = require('express');
var request = require('request');
var path    = require('path');
var app     = express();

app.set('port', process.env.PORT || 5000);
app.use(favicon(path.join(__dirname + '/app/favicon.ico')));

var cons     = require('consolidate');
var marked   = require('marked');
var hljs     = require('highlight.js');
var nunjucks = require('nunjucks');
var markdown = new marked.Renderer();

marked.setOptions({
  renderer: markdown,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

app.engine('html', cons.nunjucks);
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'html');

// -- Mount static files here --
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
app.use('/assets', express.static(__dirname + '/app/assets'));
app.use('/scripts', express.static(__dirname + '/app/scripts'));
app.use('/components', express.static(__dirname + '/app/components'));

// Route Middleware goes here
app.use(function (req, res, next) {
  next();
});


app.get('*', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '/app')})
})


app.listen(app.get('port'), function () {
  console.log('Express serving from', 'https://127.0.0.1:' + app.get('port'));
});
