const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const entrySchema = new Schema(
  {
    details: {
      animeloot: {
        type: String,
        required: true,
      },
      MerchName: {
        type: String,
        required: true,
      },
      ReleasedDate: {
        type: Date,
        required: true,
      },
      Quantity: {
        type: String,
        required: true,
      },
      ItemNumber: {
        type: String,
        required: true,
      },
      entry: {
        type: String,
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      tryURL: {
        type: String,
        required: false,
      },
      imgURL: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Entry", entrySchema);
