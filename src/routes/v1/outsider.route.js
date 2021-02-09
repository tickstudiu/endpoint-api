const router = require("express").Router();
const outsiderController = require('../../controllers/v1/outsider.controller');
const outsiderValidation = require('../../validations/outsider.validation');
const validate = require('../../middlewares/validate');
const passport = require('passport');

router.post("/login",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.authLogin), outsiderController.login);
router.post("/deposit",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.updateBalance), outsiderController.deposit);
router.post("/withdraw",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.updateBalance), outsiderController.withdraw);
router.post("/player/transfer",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.transfer), outsiderController.playerTransfer);
router.post("/player/balance",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.put("/change/password",   passport.authenticate('bearer', { session: false }), validate(outsiderValidation.updatePassword), outsiderController.updatePassword);
router.get("/agent/credit",  passport.authenticate('bearer', { session: false }), outsiderController.credit);
router.post("/outstanding",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/xRegister",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/register",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/check/transaction",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/tickets",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/player/turnover",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/player/information",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.put("/player/information",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/player/total/deposit",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/player/total/withdrawal",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/member/list/date",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);
router.post("/player/outstanding",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.balance), outsiderController.balance);

module.exports = router;