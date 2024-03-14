const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
const routes = require("./routes/router");
const getBackup = require("./backup");
const video = require("./video");
const PORT = process.env.PORT || 3001;
const uploadMiddlewaer = require("./middlewares/upload.middleware")

dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("db error", err.message));

app.use(cors());

app.post("/", uploadMiddlewaer, (req, res) => {
  return res.json(req.images);
});

app.get("/video/:video", video);

// cron.schedule("* * * * *", () => {
//   console.log("Running backup...");
//   getBackup();
// });

app.use(routes);
app.use("/uploads", express.static("uploads"));
app.listen(PORT, () => console.log(`server is running ${PORT}`));