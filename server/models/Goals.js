const { Schema, model } = require("mongoose");

const goalSchema = new Schema({
  name: String,
  // deadline or date of goal
});

// Exporting Goals Model to make available
const Goals = model("goals", goalSchema);
module.exports = Goals;


