const typeDefs = `
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
    age: Int
    levels: String
    goals: [String]
    role: String
    bio: String
    image: String
    awards: [Award]
    requests: [Request]
    friends: [Profile]
    ourSponsors:[Profile]
    weSponsor:[Profile]
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
  
  type Request {
    _id: ID
    fromId: String
    requestType: String,
    accepted: Boolean,
    message: String,
    requestDate: String, 
  }

  input CreateRequestInput {
    fromId: String
    requestType: String,
    accepted: Boolean,
    message: String,
    requestDate: String, 
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

    type PaymentResult {
    paymentId: String
    status: String
  }

  input PaymentInput {
    sourceId: String!
    amount: Int!
  }



type Mutation {
  addProfile(name: String!, email: String!, password: String!, role: String!): Auth
  login(email: String!, password: String!): Auth

  addAward(profileId: ID!, awards: CreateAwardInput!): Profile
  addRequest(profileId: ID!, requests: CreateRequestInput!): Profile

  addFriend(profileId: ID!, friendId: ID!): Profile
  addSponsor(profileId: ID!, friendId: ID!): Profile

  addGoal(profileId: ID!, goal: String!): Profile
  addBio(profileId: ID!, bio: String!): Profile
  addAge(profileId: ID!, age: Int!): Profile
  addLevels(profileId: ID!, levels: String!): Profile
  removeProfile: Profile
  removeGoal(goal: String!): Profile
  createPayment(input: PaymentInput): PaymentResult
  editProfile(profileId:ID!, age:Int, levels:String!, goals:[String!]): Profile
}
`;

module.exports = typeDefs;