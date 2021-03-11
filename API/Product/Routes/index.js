const express = require('express');

const Product = require('../Controllers/Product');
const ValidationSchema = require('../Validation');
const Middleware = require('../../../Middlewares/');

/**Initiate router app */
const router = express.Router();

/**Triggered on Product.create
 * @route /products/
 * @method POST
 * @middlewares  [ @method Validate(createProduct,body) ]
 * @param createProduct is create product validation Schema
 * @param body Validating incoming data from request.body
 */
router.post('/', Middleware.validate(ValidationSchema.createProduct, 'body'), Product.create);

/**Triggered on Product.find
 * @route /products/
 * @method GET
 */
router.get('/', Product.find);

/**Triggered on Product.findOne
 * @route /products/{id}
 * @method GET
 */
router.get('/:id', Product.findOne);

/**Triggered on Product.productFeature
 * @route /products/{id}/feature
 * @method PUT
 */
router.put('/:id/feature', Product.productFeature);

module.exports = router;
