const mongoose = require("mongoose");
const slugify = require("slugify");

// Product schema

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    subTotal: {
      type: String,
    },
    products: [
      {
        itemid: { type: String },
        itemprice: { type: Number },
        itemtitle: { type: String },
        itemimages: { type: String },
        count: { type: Number },
      },
    ],
  },
  { timestamps: true }
  // { typeKey: "$type" }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
