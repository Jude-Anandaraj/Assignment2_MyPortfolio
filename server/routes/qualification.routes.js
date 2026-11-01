import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Protected routes - every qualifications route needs a signed in user
router
  .route("/api/qualifications")
  .get(authCtrl.requireSignin, qualificationCtrl.list)
  .post(authCtrl.requireSignin, qualificationCtrl.create)
  .delete(authCtrl.requireSignin, qualificationCtrl.removeAll);

router
  .route("/api/qualifications/:qualificationId")
  .get(authCtrl.requireSignin, qualificationCtrl.read)
  .put(authCtrl.requireSignin, qualificationCtrl.update)
  .delete(authCtrl.requireSignin, qualificationCtrl.remove);

router.param("qualificationId", qualificationCtrl.qualificationByID);

export default router;
