const router = require('express').Router();
const clientController = require('../controllers/client.controller.js');
const { auth } = require('../utils/middlewares.js');

router.route('/all').get(clientController.all);
router.route('/create').post(clientController.create);
router.route('/show/:id').get(clientController.show);
router.route('/edit/:id').put(clientController.edit);
router.route('/destroy/:id').delete(clientController.destroy);

module.exports = router;
