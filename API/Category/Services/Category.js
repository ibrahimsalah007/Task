const Category = require('../Models/Category');
const CategoryUtils = require('../Utils');

/**
 * Triggered on categorie creation
 * @param {data}
 * @return {object}
 */
exports.create = async (data) => {
  /**Initiate new categorie with given and necessary data */
  // const categorie = new Category();
  const category = await Category.create(data);
  return category;
};

/**
 * Triggered on categorie find
 * @param {query} query categorie model based on given options
 * Get all categories
 */
exports.find = async (query) => {
  /**Find categories with given criteria */
  const categories = await Category.findAll();
  const tree = await CategoryUtils.createCategoriesTree(categories);
  return tree;
};

/**
 * Triggered on categorie findOne
 * @param {query} query categorie model based on given options
 * Get a single categorie.
 */
exports.findOne = async (query) => {
  /**Find One categorie with given criteria */
  const categorie = new Category();
  const categories = await categorie.findOne(query);
  return categories;
};

/**
 * Triggered on categorie findById
 * @param {id} id find categorie by the given id
 * Get a single categorie by id
 */
exports.findById = async (id) => {
  /**Find One categorie with given criteria */
  const category = await Category.findByPk(id);
  return category;
};
