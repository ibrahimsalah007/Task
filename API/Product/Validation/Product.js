const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createProduct = Joi.object().keys({
  name: Joi.string().min(3).max(45).required(),
  category_id: Joi.number().required(),
  feature: Joi.boolean(),
  image_uri: Joi.string().max(255),
});

const updateProduct = Joi.object().keys({
  name: Joi.string().min(3).max(45),
  category_id: Joi.number(),
  feature: Joi.boolean(),
  image_uri: Joi.string().max(255),
});

module.exports = {
  createProduct,
  updateProduct,
};
