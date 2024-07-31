const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    goals: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth

    addGoal(profileId: ID!, goal: String!): Profile
    removeProfile: Profile
    removeGoal(goal: String!): Profile
  }
`;

module.exports = typeDefs;
