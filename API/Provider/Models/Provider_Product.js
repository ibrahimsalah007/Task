const Sequelize = require('sequelize');
const db = require('../../../Config/database');

/**Product Model */
const Product = require('../../Product/Models/Product');

/**Provider Model */
const Provider = require('./Provider');

const Product_Provider = db.define(
  'products_providers',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
    },
    available: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    provider_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Provider,
        key: 'id',
      },
    },
    product_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
  },
  { timestamps: true }
);

Product.belongsToMany(Provider, { through: Product_Provider, foreignKey: 'product_id' });
Provider.belongsToMany(Product, { through: Product_Provider, foreignKey: 'provider_id' });

Product_Provider.sync().then(() => {
  console.log('table created');
});

module.exports = Product_Provider;
