require('express-async-errors');

const { ResourceNotFoundError } = require('./Errors/');
const error = require('./Middlewares/').error;

const app = require('./Config/Server');

/**Database */
const db = require('./Config/database');

/**Testing db */
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

/**Routes */
/**Providers routes */
app.use('/providers', require('./API/Provider/Routes/'));

/**Products routes */
app.use('/products', require('./API/Product/Routes/'));

/**Categories routes */
app.use('/categories', require('./API/Category/Routes/'));

/** For invalid and non exist routes */
app.all('*', (req, res) => {
  throw new ResourceNotFoundError('Requested route not found');
});

// Error middleware handler
app.use(error);
