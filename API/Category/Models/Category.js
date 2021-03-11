const Sequelize = require('sequelize');
const db = require('../../../Config/database');

const Category = db.define('category', {
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
  // parent_id: {
  //   type: Sequelize.INTEGER,
  //   // references: {
  //   //   model: this.Category,
  //   //   key: 'id',
  //   // },
  // },
});

Category.hasOne(Category, { as: 'parent', foreignKey: 'parent_id' });

Category.sync().then(() => {
  console.log('table created');
});
module.exports = Category;
