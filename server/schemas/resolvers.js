const { Profile, Award, Request } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { randomUUID } = require('crypto');
const { Client } = require('square');
require('dotenv').config();


const getPaymentsApi = () => {
  return new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
  }).paymentsApi;
};


// resolvers will be leveraged to run queries and mutations. 
const resolvers = {

  // queries block
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }, context ) => {
      return Profile.findOne({ _id: profileId }) 
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
        bio: null,
        image: null,
        age: null,
        levels: null,
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
      throw AuthenticationError;
    },

    // add/send request
    addRequest: async(parent, { profileId, requests }, context) => {
      if (context.user) {
        try{
          const updatedProfile = await Profile.findOneAndUpdate(
            { _id: profileId },
            {
              $addToSet: { requests: requests }
            },
            {
              new: true,
              runValidators: true,
            }
          );
          return updatedProfile;
        } catch (error) {
          throw new Error(error.message);
        }
      }
      throw AuthenticationError;
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
      throw AuthenticationError;
    },

    // add sponsor
    addSponsor: async (parent, { profileId, friendId }, context) => {
      if (context.user) {
        const updatedProfile = await Profile.findOneAndUpdate(
          { _id: friendId },
          {
            $addToSet: { weSponsor: profileId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        const friendProfile = await Profile.findByIdAndUpdate(
          { _id: profileId },
          {
            $addToSet: { ourSponsors: friendId }
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
    createPayment: async (_, { input }) => {
      const { sourceId, amount } = input;
      console.log("Payment input:", input);  // Log the input to debug
      const paymentsApi = getPaymentsApi();  // Initialize the Square client here
      try {
        const { result } = await paymentsApi.createPayment({
          idempotencyKey: randomUUID(),
          sourceId,
          amountMoney: {
            currency: 'USD',
            amount,
          },
        });
        console.log("Payment result:", result);  // Log the result to debug
        return {
          paymentId: result.payment.id,
          status: result.payment.status,
        };
      } catch (error) {
        console.error("Payment error:", error);  // Log the error to debug
        throw new Error("Payment processing failed");
      }
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
