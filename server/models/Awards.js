const { Schema } = require ("mongoose");

const awardsSchema = new Schema(
  {
    title: String,
    competition: String,
    awardedDate: Date,
  }
);

module.exports = awardsSchema;

// Instead of awards we could do a competition model because with just awards it would be limited