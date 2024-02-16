const { Router } = require("express");
const { registerController } = require("../controllers/authController");
const router = Router();

router.post("/register", registerController);

module.exports = router;
