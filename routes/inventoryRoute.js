const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createInventoryController,
} = require("../controllers/inventoryController");

const router = Router();

router.post("/create-inventory", authMiddleware, createInventoryController);

module.exports = router;
