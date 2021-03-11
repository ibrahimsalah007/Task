const { DomainError } = require('../Errors/');

const error = (err, req, res, next) => {
  if (err instanceof DomainError) {
    return res.status(err.statusCode).send({ error: err.serializeErrors() });
  }
  console.log(err);
  res.status(400).json({
    error: [
      {
        name: 'UnknwonError',
        message: 'Something went wrong',
        statusCode: 400,
      },
    ],
  });
};

module.exports = error;
