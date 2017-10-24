const messages = require('./messages');

module.exports = function(app) {
  app.use('/messages', messages)
};
