const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const addProduct = Joi.object().keys({
  product_id: Joi.number().required(),
  provider_id: Joi.number().required(),
  price: Joi.number().required(),
  available: Joi.number().required(),
});

const updateProduct = Joi.object().keys({
  product_id: Joi.number(),
  provider_id: Joi.number(),
  price: Joi.number(),
  available: Joi.number(),
});

const createProvider = Joi.object().keys({
  name: Joi.string().min(3).max(45).required(),
});

const updateProvider = Joi.object().keys({
  name: Joi.string().min(3).max(45),
});

module.exports = {
  createProvider,
  updateProvider,
  addProduct,
  updateProduct,
};
