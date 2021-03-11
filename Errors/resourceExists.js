const DomainError = require('./domainError');
class ResourceExists extends DomainError {
  statusCode = 409;
  constructor(message = 'Conflict', statusCode) {
    super(message);
  }
  serializeErrors() {
    return { name: this.name, errors: [{ message: this.message }], statusCode: this.statusCode };
  }
}

module.exports = ResourceExists;
