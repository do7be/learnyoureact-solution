let express = require('express');
let app = express();

let React = require('react');
let DOM = React.DOM;
let body = DOM.body;
let div = DOM.div;
let script = DOM.script;

let browserify = require('browserify');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());



require('node-jsx').install();
let TodoBox = require('./views/index.jsx');

let data = [
  {title: "Shopping", detail: process.argv[3]},
  {title: "Hair cut", detail: process.argv[4]}
];

app.use('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./app.js')
    .transform('reactify')
    .bundle()
    .pipe(res);
});

app.use('/', function(req, res) {
  let initialData = JSON.stringify(data);
  let markup = React.renderToString(React.createElement(TodoBox, {data: data}));

  res.setHeader('Content-Type', 'text/html');

  let html = React.renderToStaticMarkup(body(null,
      div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
      script({
        id: 'initial-data',
        type: 'text/plain',
        'data-json': initialData
      }),
      script({src: '/bundle.js'})
  ));

  res.end(html);
});

app.listen(app.get('port'), function () {
  console.log('server listening on port %s', app.get('port'));
});