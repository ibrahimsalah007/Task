const DomainError = require('./domainError');
const InternalError = require('./internalServerError');
const ResourceNotFoundError = require('./resourceNotFoundError');
const BadRequestError = require('./badRequestError');
const UnauthorizedError = require('./unauthorizedError');
const ValidationError = require('./validationError');
const ResourceExists = require('./resourceExists');
const ForbiddenError = require('./forbiddenError');

module.exports = {
  DomainError,
  InternalError,
  ResourceNotFoundError,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  ResourceExists,
  ForbiddenError,
};
