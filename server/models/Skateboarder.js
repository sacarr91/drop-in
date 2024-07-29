const { Schema, model } = require("mongoose");
// We can include goals as a subdocument as they can have mult. goals
// Within skateboarder schema: define a profile with a name, age, awards, experience or levels

const skaterSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 280,
  },
  age: {
    type: Number,
    required: true,
  },
  awards: [{ type: Schema.Types.ObjectId, ref: "awards" }],
  levels: {
    type: String,
    required: true,
    maxlength: 280,
  },
  requireSponsorship: {
    type: Boolean,
  },
  bio: {
    type: Text,
  },
  associations: [
    {
      type: String,
    },
  ],
  goals: {
    type: String,
  },
});
// Initialize my Skateboader  model - this might need to go above SkaterSchema
const Skateboarder = model("skateboarder", skaterSchema);

module.exports = Skateboarder;
