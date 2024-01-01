const mongoose = require("mongoose");
const slugify = require("slugify");

// Product schema

const reviewSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    comment: { type: String },
    ratings: {
      type: String,
    },
    user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
  // { typeKey: "$type" }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
