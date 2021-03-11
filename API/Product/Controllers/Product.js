const ProductService = require('../Services');
const ProductUtils = require('../Utils');
const { BadRequestError, ResourceNotFoundError } = require('../../../Errors');

/**
 * Triggered on product creation
 * @route /products/
 */
exports.create = async (req, res) => {
  /**Create product*/
  const product = await ProductService.create(req.body);
  return res.send(product);
};

/**
 * Triggered on product creation
 * @route /products/
 */
exports.find = async (req, res) => {
  /**Find products*/
  const { page, size, category_id } = req.query;
  const { limit, offset } = ProductUtils.getPagination(page, size);

  let products = await ProductService.find({ limit, offset, category_id });

  /**@returns {object}  of pagination details and list of products*/
  products = ProductUtils.getPagingData(products, page, limit);
  return res.send(products);
};

/**
 * Triggered on product creation
 * @route /products/{id}
 */
exports.findOne = async (req, res) => {
  /**Find one product*/
  const product = await ProductService.findById(req.params.id);
  return res.send(product);
};

/**
 * Triggered on product featuring
 * @route /products/{id}/feature
 */
exports.productFeature = async (req, res) => {
  /**Find one product*/
  const product = await ProductService.findById(req.params.id);
  if (!product) throw new ResourceNotFoundError('Product doesn`t exist');
  const updatedProduct = await ProductService.update(req.params.id, { feature: !product.feature });
  return res.send(updatedProduct);
};
