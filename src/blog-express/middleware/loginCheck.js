const { ErrorModel } = require('../module/resModule');

module.exports = (req, res, next) => {
  if (req.session.username) {
    next();
    return;
  }
  res.json(
    new ErrorModel('please login first')
  )
};