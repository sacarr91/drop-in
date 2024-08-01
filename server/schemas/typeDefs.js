const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    goals: [String]!
    age: String
    level: String
    bio: String
    awards: [Award]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  
   type Award {
    _id: ID
    title: String
    competition: String
    awardedDate: String
  }

  input CreateAwardInput {
  title: String
  competition: String
  awardedDate: String
}

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth

    addAward(profileId: ID!, awards: CreateAwardInput!): Profile
    
    addGoal(profileId: ID!, goal: String!): Profile
    addBio(profileId: ID!, bio: String!): Profile
    removeProfile: Profile
    removeGoal(goal: String!): Profile
  }
`;

module.exports = typeDefs;