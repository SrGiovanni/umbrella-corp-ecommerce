// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})


// TODO: seek clarity on this part
// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  //as: 'product_tags',
  foreignKey: 'tag_id'
})


// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //as: 'product_tags',
  foreignKey:'product_id'
})

// /TODO get clarity on the last part
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
