const router = require('express').Router();
const providerController = require('../controllers/provider.controller.js');

router.route('/all').get(providerController.all);
router.route('/create').post(providerController.create);
router.route('/show/:id').get(providerController.show);
router.route('/edit/:id').put(providerController.edit);
router.route('/destroy/:id').delete(providerController.destroy);

module.exports = router;
