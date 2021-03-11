const express = require('express');

const Provider = require('../Controllers/Provider');
const ValidationSchema = require('../Validation');
const Middleware = require('../../../Middlewares/');

/**Initiate router app */
const router = express.Router();

/**Triggered on Provider.create
 * @route /providers/
 * @method POST
 * @middlewares  [ @method Validate(createProvider,body) ]
 * @param createProvider is create provider validation Schema
 * @param body Validating incoming data from request.body
 */
router.post('/products', Middleware.validate(ValidationSchema.addProduct, 'body'), Provider.addProduct);

/**Triggered on Provider.create
 * @route /providers/
 * @method POST
 * @middlewares  [ @method Validate(createProvider,body) ]
 * @param createProvider is create provider validation Schema
 * @param body Validating incoming data from request.body
 */
router.post('/', Middleware.validate(ValidationSchema.createProvider, 'body'), Provider.create);

/**Triggered on Provider.find
 * @route /providers/
 * @method GET
 */
router.get('/', Provider.find);

/**Triggered on Provider.findOne
 * @route /providers/{id}
 * @method GET
 */
router.get('/products', Provider.findMyProducts);

/**Triggered on Provider.findOne
 * @route /providers/{id}
 * @method GET
 */
router.get('/:id', Provider.findOne);

module.exports = router;
