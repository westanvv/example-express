module.exports = {
  getData,
};

function getData(req, res, next) {
  req.app.get('db').query('SELECT * FROM messages LIMIT 100', function (err, rows) {
    if (err) throw err;

    res
      .status(200)
      .send(rows);
  });


}
