const CategoryService = require('../Services');
const CategoryUtils = require('../Utils');
const { BadRequestError, ResourceNotFoundError } = require('../../../Errors');

/**
 * Triggered on categorie creation
 * @route /categories/
 */
exports.create = async (req, res) => {
  /**Create categorie*/
  const categorie = await CategoryService.create(req.body);
  return res.send(categorie);
};

/**
 * Triggered on categorie creation
 * @route /categories/
 */
exports.find = async (req, res) => {
  /**Find categories*/
  const categorie = await CategoryService.find();
  return res.send(categorie);
};

/**
 * Triggered on categorie creation
 * @route /categories/
 */
exports.findOne = async (req, res) => {
  /**Find one categorie*/
  const categorie = await CategoryService.findById(req.params.id);
  return res.send(categorie);
};
