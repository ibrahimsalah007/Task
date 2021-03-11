const ProviderService = require('../Services/');
const ProviderUtils = require('../Utils/');
const { BadRequestError, ResourceNotFoundError } = require('../../../Errors/');

/**
 * Triggered on provider creation
 * @route /providers/
 */
exports.addProduct = async (req, res) => {
  /**Create provider*/
  const provider = await ProviderService.addProduct(req.body);
  return res.send(provider);
};

/**
 * Triggered on provider creation
 * @route /providers/
 */
exports.create = async (req, res) => {
  /**Create provider*/
  const provider = await ProviderService.create(req.body);
  return res.send(provider);
};

/**
 * Triggered on provider creation
 * @route /providers/
 */
exports.findMyProducts = async (req, res) => {
  /**Find providers*/
  const { page, size } = req.query;
  const { limit, offset } = ProviderUtils.getPagination(page, size);

  let providers = await ProviderService.findMyProducts({ limit, offset });

  /**@returns {object}  of pagination details and list of products*/
  // providers = ProviderUtils.getPagingData(providers, page, limit);

  return res.send(providers.rows);
};

/**
 * Triggered on provider creation
 * @route /providers/
 */
exports.find = async (req, res) => {
  /**Find providers*/
  const { page, size } = req.query;
  const { limit, offset } = ProviderUtils.getPagination(page, size);

  let providers = await ProviderService.find({ limit, offset });
  res.send(providers);
};

/**
 * Triggered on provider creation
 * @route /providers/
 */
exports.findOne = async (req, res) => {
  /**Find one provider*/
  const provider = await ProviderService.findById(req.params.id);
  return res.send(provider);
};
