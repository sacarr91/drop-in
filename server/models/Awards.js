const { Schema, model } = require("mongoose");

const awardsSchema = new Schema({
  title: String,
  competition: String,
  awardedDate: Date,
});

const Award = model("award", awardsSchema);

module.exports = Award;

// Instead of awards we could do a competition model because with just awards it would be limited