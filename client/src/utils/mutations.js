import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    addProfile(name: $name, email: $email, password: $password, role: $role) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
// When view profile is selected this makes an option avail. to add goal
export const ADD_GOAL = gql`
  mutation addGoal($profileId: ID!, $goal: String!) {
    addGoal(profileId: $profileId, goal: $goal) {
      _id
      name
      goals
    }
  }
`;
export const ADD_AGE = gql`
  mutation addAge($profileId: ID!, $age: Int!) {
    addAge(profileId: $profileId, age: $age) {
      _id
      name
      age
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_GOAL = gql`
  mutation removeGoal($goal: String!) {
    removeGoal(goal: $goal) {
      _id
      name
      goals
    }
  }
`;

export const REMOVE_AGE = gql`
  mutation removeAge($goal: Int!) {
    removeAge(age: $age) {
      _id
      name
      age
    }
  }
`;
