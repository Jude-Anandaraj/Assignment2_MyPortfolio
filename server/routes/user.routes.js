import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

// CRUD routes for users
router
  .route("/api/users")
  .get(userCtrl.list)
  .post(userCtrl.create)
  .delete(userCtrl.removeAll);

router
  .route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
