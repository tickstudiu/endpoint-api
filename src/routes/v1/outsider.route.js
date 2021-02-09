const router = require("express").Router();
const outsiderController = require('../../controllers/v1/outsider.controller');
const outsiderValidation = require('../../validations/outsider.validation');
const validate = require('../../middlewares/validate');
const passport = require('passport');

router.post("/login",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.authLogin), outsiderController.login);
router.post("/deposit",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.updateBalance), outsiderController.deposit);
router.post("/withdraw",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.updateBalance), outsiderController.withdraw);
router.post("/player/transfer",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.transfer), outsiderController.playerTransfer);
router.post("/player/balance",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.check), outsiderController.balance);
router.put("/change/password",   passport.authenticate('bearer', { session: false }), validate(outsiderValidation.updatePassword), outsiderController.updatePassword);
router.get("/agent/credit",  passport.authenticate('bearer', { session: false }), outsiderController.credit);
router.post("/outstanding",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.outstanding), outsiderController.outstanding);
router.post("/xRegister",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.register), outsiderController.xRegister);
// router.post("/register",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.register), outsiderController.register);
router.post("/tickets",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.tickets), outsiderController.tickets);
router.post("/player/turnover",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.turnover), outsiderController.playerTurnover);
router.post("/player/information",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.player), outsiderController.playerInformation);
router.post("/player/total/deposit",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.playerDeposit), outsiderController.playerDeposit);
router.post("/player/total/withdrawal",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.playerWithdrawal), outsiderController.playerWithdrawal);
router.post("/member/list/date",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.memberList), outsiderController.memberList);
router.post("/player/outstanding",  passport.authenticate('bearer', { session: false }), validate(outsiderValidation.playerOutstanding), outsiderController.playerOutstanding);

module.exports = router;