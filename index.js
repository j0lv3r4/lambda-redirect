const { run } = require('micro');

const { REDIRECT_URI } = process.env;

const redirect = async (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', `${REDIRECT_URI}${req.url}`);
  res.end();
}

module.exports = (req, res) => run(req, res, redirect);
