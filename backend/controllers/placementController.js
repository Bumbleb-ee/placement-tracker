const Placement = require("../models/Placement");

// ADD placement
const addPlacement = async (req, res) => {
  const { companyName, role, status, notes } = req.body;

  const placement = await Placement.create({
    user: req.user._id,
    companyName,
    role,
    status,
    notes
  });

  res.status(201).json(placement);
};

// GET all placements
const getPlacements = async (req, res) => {
  const placements = await Placement.find({ user: req.user._id });
  res.json(placements);
};

// UPDATE placement
const updatePlacement = async (req, res) => {
  const placement = await Placement.findById(req.params.id);

  if (!placement) {
    return res.status(404).json({ message: "Placement not found" });
  }

  if (placement.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  placement.status = req.body.status || placement.status;
  placement.notes = req.body.notes || placement.notes;

  const updated = await placement.save();
  res.json(updated);
};

// DELETE placement
const deletePlacement = async (req, res) => {
  const placement = await Placement.findById(req.params.id);

  if (!placement) {
    return res.status(404).json({ message: "Placement not found" });
  }

  if (placement.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await placement.deleteOne();
  res.json({ message: "Placement removed" });
};

module.exports = {
  addPlacement,
  getPlacements,
  updatePlacement,
  deletePlacement
};
