const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const placementRoutes = require("./routes/placementRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// MIDDLEWARE (order matters!)
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/placements", placementRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
