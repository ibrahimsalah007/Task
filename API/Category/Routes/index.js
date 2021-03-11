const express = require('express');

const Category = require('../Controllers/Category');
const ValidationSchema = require('../Validation');
const Middleware = require('../../../Middlewares/');

/**Initiate router app */
const router = express.Router();

/**Triggered on Category.create
 * @route /categories/
 * @method POST
 * @middlewares  [ @method Validate(createCategory,body) ]
 * @param createCategory is create categorie validation Schema
 * @param body Validating incoming data from request.body
 */
router.post('/', Middleware.validate(ValidationSchema.createCategory, 'body'), Category.create);

/**Triggered on Category.find
 * @route /categories/
 * @method GET
 */
router.get('/', Category.find);

/**Triggered on Category.findOne
 * @route /categories/{id}
 * @method GET
 */
router.get('/:id', Category.findOne);

module.exports = router;
