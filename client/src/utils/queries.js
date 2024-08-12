import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      goals
      role
      image
      bio
      age
      levels
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      age
      levels
      goals
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      age
      levels
      goals
      bio
      email
    }
  }
`;
