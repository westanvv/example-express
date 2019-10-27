const getAll = (req, res, next) => {
  res.send({
    userId: 55,
  });
};

const getUser = (req, res, next) => {
  console.log(req.user, req.params);
  res.send('test');
};

module.exports = {
  getAll,
  getUser,
};
