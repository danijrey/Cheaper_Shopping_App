const router = require('express').Router();
const branchController = require('../controllers/branch.controller.js');
const { auth } = require('../utils/middlewares.js');


router.route('/all').get(branchController.all);
router.route('/create').post(branchController.create);
router.route('/show/:id').get(branchController.show);
router.route('/edit/:id').put(branchController.edit);
router.route('/destroy/:id').delete(branchController.destroy);

module.exports = router;
