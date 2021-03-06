const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../models/index.js');
const mountRoutes = require('./routes');
const elastic = require('../models/elasticSearch.js');

const app = express();
/* Webpack Hot Reloads */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');
const http = require('http').Server(app);
// const io = require('socket.io')(http);

const port = process.env.PORT || 5421;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

mountRoutes(app);

app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
//   socket.on('chat message', (msg) => {
//     console.log(msg);
//     io.emit('chat message', msg);
//   });
// });

// TODO: prevent sync from outputting so much to console
db.sequelize
  .sync()
  .then(() => {
    http.listen(port, () => {
      console.log(`Tradehouse server listening on port ${port}`);
    });
  });


// ElasticSearch
