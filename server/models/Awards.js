const { Schema, model } = require("mongoose");

const awardsSchema = new Schema({
  title: String,
  competition: String,
  awardedDate: Date,
});

const Award = model("award", awardsSchema);

module.exports = Award;
