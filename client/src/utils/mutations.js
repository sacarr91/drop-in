import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!, $role: String!) {
    addProfile(name: $name, email: $email, password: $password, role: $role) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_GOAL = gql`
  mutation addGoal($profileId: ID!, $goal: String!) {
    addGoal(profileId: $profileId, goal: $goal) {
      _id
      name
      goals
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

export const CREATE_PAYMENT = gql`
  mutation CreatePayment($input: PaymentInput!) {
    createPayment(input: $input) {
      paymentId
      status
    }
  }
`;

export const FOLLOW_PROFILE = gql`
  mutation addFriend($profileId: ID!, $friendId: ID!) {
    addFriend(profileId: $profileId, friendId: $friendId) {
      _id
      name
      email
      age
      levels
      goals
      role
      bio
      image
      friends {
        _id
        name
      }
    }
  }
`;

export const EDIT_PROFILE = gql`
mutation editProfile($profileId:ID!, $age:Int, $levels:String!, $goals:[String!]){
editProfile(profileId:$profileId, age:$age, levels:$levels, goals:$goals){
_id
age
levels
goals
}
}`