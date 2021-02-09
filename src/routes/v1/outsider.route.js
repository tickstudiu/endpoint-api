const router = require("express").Router();
const outsiderController = require('../../controllers/v1/outsider.controller');
const outsiderValidation = require('../../validations/outsider.validation');
const validate = require('../../middlewares/validate');

router.post("/balance",  validate(outsiderValidation.balance), outsiderController.balance);
router.put("/password",  validate(outsiderValidation.updatePassword), outsiderController.updatePassword);

module.exports = router;