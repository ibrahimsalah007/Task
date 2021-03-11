const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createCategory = Joi.object().keys({
  name: Joi.string().min(3).max(45).required(),
  parent_id: Joi.number(),
});

const updateCategory = Joi.object().keys({
  name: Joi.string().min(3).max(45),
  parent_id: Joi.number(),
});

module.exports = {
  createCategory,
  updateCategory,
};
