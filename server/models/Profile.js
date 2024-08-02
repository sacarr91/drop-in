const { Schema, model } = require('mongoose');
const Award = require('./Awards');
const bcrypt = require('bcrypt');


const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  bio: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  friends: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'Profile'
    }
  ],
  
  awards: [ Award ],

  age: {
    type: Number,
    trim: true,
  },
  levels: {
    type: String,
    trim: true,
  },
  goals: [
    {
      type: String,
      trim: true,
    },
  ],
  role: {
    type: String,
    required: true,
  },
});

profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model("Profile", profileSchema);

module.exports = Profile;
