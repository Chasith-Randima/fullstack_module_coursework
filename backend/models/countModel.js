const mongoose = require("mongoose");

// Product schema

const countSchema = new mongoose.Schema(
  { productId: String, count: Number }

  // { typeKey: "$type" }
);

const Count = mongoose.model("Count", countSchema);

module.exports = Count;
