const Sequelize = require('sequelize');
const db = require('../../../Config/database');

/**Category Model */
const Category = require('../../Category/Models/Category');

/**Provider Model */
const Provider = require('../../Provider/Models/Provider');

/**Provider_Product Model */
// const Product_Provider = require('../../Provider/Models/Provider_Product');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: 'compositeIndex',
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  feature: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  // category_id: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Category,
  //     key: 'id',
  //   },
  // },
});

Product.hasOne(Category, { foreignKey: 'id' });

Product.sync().then(() => {
  console.log('table created');
});
module.exports = Product;
