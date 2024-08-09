const { Profile, Award } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


// resolvers will be leveraged to run queries and mutations. 
const resolvers = {

  // queries block
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },


  // mutations block
  Mutation: {

    // add profile
    addProfile: async (parent, { name, email, password, role }) => {
      const profile = await Profile.create({
        name,
        email,
        password,
        role,
      });
      const token = signToken(profile);

      return { token, profile };
    },

    // login 
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // TO DO: add levels

    // add awards
    addAward: async (parent, { profileId, awards }, context) => {
      if (context.user) {
        try {
          // Create award
          const updatedProfile = await Profile.findByIdAndUpdate(
            profileId,
            {
              $addToSet: { awards: awards },
            },
            {
              new: true,
              runValidators: true,
            }
          );
          if (!updatedProfile) {
            throw new Error('Profile not found');
          }
          return updatedProfile;
        } catch (error) {
          throw new Error(error.message);
        }
      }
      throw new AuthenticationError;
    },

    // add friends
    addFriend: async (parent, { profileId, friendId }, context) => {
      if (context.user) {
        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { friends: friendId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return updatedProfile;
      }
      throw new AuthenticationError;
    },

    // add sponsor
    addSponsor: async (parent, { profileId, friendId }, context) => {
      if (context.user) {
        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { weSponsor: friendId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        const friendProfile = await Profile.findByIdAndUpdate(
          { _id: friendId },
          {
            $addToSet: { ourSponsors: profileId }
          }
        );
        return updatedProfile;
      }
      throw AuthenticationError;
    },


    // add goals
    addGoal: async (parent, { profileId, goal }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { goals: goal },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },

    // add and update bio
    addBio: async (parent, { profileId, bio }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $set: { bio: bio },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },

    addAge: async (parent, { profileId, age }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $set: { age: age } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    addLevels: async (parent, { profileId, levels }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          { $set: { levels: levels } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    removeGoal: async (parent, { goal }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { goals: goal } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    editProfile: async (parent, { profileId, age, levels,goals}, context) => {
      if (context.user) {
        const updateFields = {}
        if(age !== null){
          updateFields.age = age;
        }
        if(levels!==""){
          updateFields.levels = levels;
        }
        if(goals.length!==0){
          return Profile.findOneAndUpdate(
            { _id: profileId },
            { $set: updateFields,$addToSet: { goals: goals } },
            {
              new: true,
              runValidators: true,
              omitUndefined: true
            }
          );
        }else{
          return Profile.findOneAndUpdate(
            { _id: profileId },
            { $set: updateFields},
            {
              new: true,
              runValidators: true,
              omitUndefined: true
            }
          );
        }
      }
      throw AuthenticationError;
    }
  },
};

module.exports = resolvers;
