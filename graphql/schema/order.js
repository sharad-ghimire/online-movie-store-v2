const { gql } = require('apollo-server-express');
module.exports = gql`
  type Order {
    _id: ID!
    user: User!
    movies: [Movie]!
    createAt: String!
  }
  input OrderMovieInput {
    _id: ID!
  }

  type Query {
    getOrder(id: ID!): Order!
    getAllOrders(userid: ID!): [Order]
  }

  type Mutation {
    createOrder(movies: [OrderMovieInput]): Order!
  }
`;
