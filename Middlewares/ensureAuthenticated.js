const JWT = require('jsonwebtoken');

const { UserService } = require('../API/');
const KEYS = require('../Config/Keys');

const { ForbiddenError, BadRequestError, InternalError } = require('../Errors/');

const ensureAuthenticated = async (req, res, next) => {
  if (!req.headers.authorization) throw new ForbiddenError();
  try {
    let userPayload;
    const token = req.headers.authorization.split(' ')[1];
    userPayload = JWT.verify(token, KEYS.JWT_KEY);
  } catch (err) {
    if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError')
      throw new BadRequestError('Invalid or expired token');
    else throw new InternalError(err.message);
  }
  req.user = userPayload;
  const user = await UserService.findById(req.user.id);
  if (!user) throw new BadRequestError('Invalid User Credentials');
  // move to next Middleware.
  next();
};

module.exports = ensureAuthenticated;
