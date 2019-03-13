const _ = require('lodash');
const axios = require('axios');
const SERVER_URI = 'http://localhost:3000';
module.exports = {
  Query: {
    getOrder: (parent, { id }) =>
      axios.get(`${SERVER_URI}/orders/${id}`).then((res) => res.data),
    getAllOrders: (parent, { user }) =>
      axios.get(`${SERVER_URI}/orders`).then((res) => {
        let username = user.username;
        let orders = res.data;
        return _.find(orders, (order) => orders.user.username === username);
      })
  },
  Mutation: {
    createOrder: (parent, { movies }) =>
      axios.post(`${SERVER_URI}/orders`, { movies }).then((res) => res.data)
  }
};
