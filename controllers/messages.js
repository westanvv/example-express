const MessageModel = require('./../models/message');

const getData = async (req, res, next) => {
  req.app.get('db').query('SELECT * FROM messages LIMIT 100', function (err, rows) {
    if (err) throw err;

    res
      .status(200)
      .send(rows);
  });
};

const getDataS = async (req, res, next) => {
  const result =  await MessageModel.findAll();

  res
    .status(200)
    .send(result);
};

module.exports = {
  getData,
  getDataS,
};
