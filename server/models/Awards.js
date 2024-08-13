const { Schema } = require ("mongoose");

const awardsSchema = new Schema(
  {
    title: String,
    competition: String,
    awardedDate: Date,
  }
);

module.exports = awardsSchema;
