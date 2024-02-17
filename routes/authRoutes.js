const { Router } = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const router = Router();

//register new user
router.post("/register", registerController);

//login user
router.post("/login", loginController);

//current user
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
