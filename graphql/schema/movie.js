const { gql } = require('apollo-server-express');
module.exports = gql`
  type Movie {
    _id: ID!
    name: String!
    poster_url: String!
    description: String!
    price: Float!
    quantity: Int!
  }

  input MovieInput {
    name: String!
    poster_url: String!
    description: String!
    price: Float!
    quantity: Int!
  }

  type Query {
    getMovie(id: ID!): Movie!
    getAllMovies: [Movie!]!
  }

  type Mutation {
    createMovie(movie: MovieInput): Movie!
  }
`;
