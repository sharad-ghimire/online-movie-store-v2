const { gql } = require('apollo-server-express');
module.exports = gql`
  type Movie {
    id: Int!
    name: String!
    poster_ur: String!
    description: String!
    price: Float!
    quantity: Int!
  }

  type Query {
    getMovie(id: Int!): Movie!
    getAllMovies: [Movie!]!
  }

  type Mutation {
    createMovie(
      id: Int!
      name: String!
      poster_ur: String!
      description: String!
      price: Float!
      quantity: Int!
    ): Movie!
    editUser(
      id: Int!
      name: String
      poster_ur: String
      description: String
      price: Float
      quantity: Int
    ): Movie
    deleteMovie(id: Int!): String!
  }
`;