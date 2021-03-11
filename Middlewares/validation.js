const Joi = require('joi');

const { ValidationError } = require('../Errors');
/**
 * @method ensureValid(shcema,property)
 *      @param { schema, property }
 *          @schema = a Joi schema to validate
 *          @property the incoming payload such as body, params or query.
 *          @example:
 *               @method ensureValid(clientSchema,'body') passed as middleware where body is refered to the req.body .
 */
const validate = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const errors = details.map((err) => errorMsgRefactor(err));
      throw new ValidationError(errors);
    }
  };
};

function errorMsgRefactor(err) {
  let object = {};
  let requiredField = err.type.split('.');
  object.message = err.message;
  object.field = err.context.label;
  object.requiredFieldType = requiredField[0];
  return object;
}

module.exports = validate;
