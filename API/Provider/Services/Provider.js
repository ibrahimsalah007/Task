const Provider = require('../Models/Provider');
const Product = require('../../Product/Models/Product');
const Product_Provider = require('../Models/Provider_Product');
const ProviderUtils = require('../Utils');

const { ResourceExists, BadRequestError, ResourceNotFoundError } = require('../../../Errors');

/**
 * Triggered on provider creation
 * @param {data}
 * @return {object}
 */
exports.addProduct = async (data) => {
  /**Initiate new provider with given and necessary data */
  let provider = await Provider.findByPk(data.provider_id);
  let product = await Product.findByPk(data.product_id);

  if (!provider) throw new ResourceNotFoundError('Invalid Provider ID');
  if (!product) throw new ResourceNotFoundError('Invalid Product ID');

  let product_provider = await Product_Provider.create(data);
  return product_provider;
};

/**
 * Triggered on provider creation
 * @param {data}
 * @return {object}
 */
exports.create = async (data) => {
  /**Initiate new provider with given and necessary data */
  const provider = await Provider.create(data);
  return provider;
};

/**
 * Triggered on provider find
 * @param {query} query provider model based on given options
 * Get all providers
 */
exports.findMyProducts = async (query) => {
  const { limit, offset } = query;

  /**Find providers with given criteria */
  let products = await Provider.findAndCountAll({
    where: {},
    limit,
    offset,
    include: [
      {
        model: Product,
        where: {},
      },
    ],
    order: [
      // We start the order array with the model we want to sort
      [Product, Product_Provider, 'price', 'ASC'],
    ],
  });

  return products;
};

/**
 * Triggered on provider find
 * @param {query} query provider model based on given options
 * Get all providers
 */
exports.find = async (query) => {
  /**Find providers with given criteria */
  const providers = await Provider.findAll(query);
  return providers;
};

/**
 * Triggered on provider findOne
 * @param {query} query provider model based on given options
 * Get a single provider.
 */
exports.findOne = async (query) => {
  /**Find One provider by given criteria */
  const provider = await provider.findOne(query);
  return provider;
};

/**
 * Triggered on provider findById
 * @param {id} id find provider by the given id
 * Get a single provider by id
 */
exports.findById = async (id) => {
  /**Find One By Id */
  const provider = await provider.findByPk(id);
  return provider;
};
