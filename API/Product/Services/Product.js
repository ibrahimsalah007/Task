const Sequelize = require('sequelize');
const Product = require('../Models/Product');
const Category = require('../../Category/Models/Category');
const Provider = require('../../Provider/Models/Provider');
const Product_Provider = require('../../Provider/Models/Provider_Product');
const { BadRequestError } = require('../../../Errors');

const Op = Sequelize.Op;

/**
 * Triggered on product creation
 * @param {data}
 * @return {object}
 */
exports.create = async (data) => {
  /**Initiate new product with given and necessary data */
  const product = await Product.create(data);
  return product;
};

/**
 * Triggered on product find
 * @param {query} query product model based on given options
 * Get all products
 */
exports.find = async (query) => {
  /**Find products with given criteria */
  const { limit, offset } = query;
  let params = {};

  if (query.category_id) params.category_id = +query.category_id;

  let products = await Product.findAndCountAll({
    where: { ...params },
    limit,
    offset,
    include: [Category, Provider],
    order: [
      // We start the order array with the model we want to sort
      [Provider, Product_Provider, 'price', 'ASC'],
    ],
  });

  return products;
};

/**
 * Triggered on product findOne
 * @param {query} query product model based on given options
 * Get a single product.
 */
exports.findOne = async (query) => {
  /**Find One product with given criteria */
  const product = await Product.findOne({
    where: { query },
    include: [Category, Provider],
    order: [
      // We start the order array with the model we want to sort
      [Provider, Product_Provider, 'price', 'ASC'],
    ],
  });
  return product;
};

/**
 * Triggered on product findById
 * @param {id} id find product by the given id
 * Get a single product by id
 */
exports.findById = async (id) => {
  /**Find One product with given criteria */
  const product = await Product.findOne({
    where: { id },
    include: [Category, Provider],
    order: [
      // We start the order array with the model we want to sort
      [Provider, Product_Provider, 'price', 'ASC'],
    ],
  });
  return product;
};

/**
 * Triggered on product findById
 * @param {id} id find product by the given id
 * Get a single product by id
 */
exports.update = async (id, data) => {
  /**Find One product with given criteria */
  const product = await Product.findByPk(id);
  if (!product) return null;

  /**Schema attributes */
  const attributes = product._options.attributes;

  for (param in data) {
    if (!attributes.includes(param))
      throw new BadRequestError(param + ' doesn`t exist in the schema attributes');
    product[param] = data[param];
  }
  await product.save();
  return product;
};
