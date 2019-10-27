const appRoute = require('./app');
const usersRoute = require('./users');
const messagesRoute = require('./messages');

module.exports = app => {
  app.use('/', appRoute);
  app.use('/users', usersRoute);
  app.use('/messages', messagesRoute);
};
