const router = require("express").Router();
const searchController = require("../controllers/navbar.search.controller.js");

router.route("/:name").post(searchController.show);



module.exports = router;




