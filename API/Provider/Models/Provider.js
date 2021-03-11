const Sequelize = require('sequelize');
const db = require('../../../Config/database');

// /**Category Model */
// const Product = require('../../Product/Models/Product');

// /**Product_Provider Model */
// const Provider_Product = require('./Provider_Product');

const Provider = db.define('provider', {
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
});

Provider.sync().then(() => {
  console.log('table created');
});

module.exports = Provider;
