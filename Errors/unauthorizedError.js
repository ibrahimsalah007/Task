const DomainError = require('./domainError');

class UnauthorizedError extends DomainError {
  statusCode = 401;
  constructor(message = 'Unauthorized', statusCode) {
    super(message);
  }
  serializeErrors() {
    return { name: this.name, errors: [{ message: this.message }], statusCode: this.statusCode };
  }
}

module.exports = UnauthorizedError;
