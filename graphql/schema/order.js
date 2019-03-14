const { gql } = require('apollo-server-express');
module.exports = gql`
  type Order {
    id: Int!
    user: User!
    movies: [Movie]!
    bookedDate: String!
  }

  type Query {
    getOrder(id: Int!): Order!
    getAllOrders(user: UserInput): [Order]
  }

  type Mutation {
    createOrder(movies: [MovieInput]): Order!
  }
`;
