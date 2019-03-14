const { gql } = require('apollo-server-express');
module.exports = gql`
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    username: String!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    login(username: String!, password: String!): AuthData!
  }

  type Mutation {
    createUser(user: UserInput): User!
  }
`;
