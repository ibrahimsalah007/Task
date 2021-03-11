const getPagination = (page, size) => {
  const limit = size ? +size : 25;
  const offset = page && page != 0 ? page - 1 : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: products } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, products, totalPages, currentPage };
};

module.exports = {
  getPagination,
  getPagingData,
};
