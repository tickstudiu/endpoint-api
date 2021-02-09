const router = require("express").Router();
const initController = require('../../controllers/v1/init.controller');

router.get("/mysql/database",  initController.mysqlMockupDatabase);

module.exports = router;

