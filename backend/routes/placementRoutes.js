const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  addPlacement,
  getPlacements,
  updatePlacement,
  deletePlacement
} = require("../controllers/placementController");

router.route("/")
  .post(protect, addPlacement)
  .get(protect, getPlacements);

router.route("/:id")
  .put(protect, updatePlacement)
  .delete(protect, deletePlacement);

module.exports = router;
