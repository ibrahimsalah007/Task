//Reformatting Categories
function createCategoriesTree(categories, parentId = null) {
  const categoriesList = [];
  let category;
  if (!parentId) {
    category = categories.filter((category) => category.parent_id == undefined);
  } else {
    category = categories.filter((category) => {
      if (category.parent_id == parentId) {
        return category;
      }
    });
  }
  for (let cat of category) {
    categoriesList.push({
      id: cat.id,
      name: cat.name,
      parent: cat.parent_id,
      children: createCategoriesTree(categories, cat.id),
    });
  }
  return categoriesList;
}

module.exports = createCategoriesTree;
