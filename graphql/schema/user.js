const { gql } = require('apollo-server-express');
module.exports = gql`
  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input UserInput {
    username: String!
  }

  type Query {
    getUser(id: Int!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(
      id: Int!
      username: String!
      name: String!
      email: String!
      password: String!
    ): User!
    editUser(id: Int!, username: String, name: String, email: String): User
    deleteUser(id: Int!): String!
  }
`;
