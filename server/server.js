const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//require routes
const categoryRoutes = require("./routes/categoryRoute");
const productRoutes = require("./routes/productRoute");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("server runnning");
});

//routes
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server connected to port : " + port);
});
