const _ = require('lodash');
const axios = require('axios');
const SERVER_URI = 'http://localhost:3000';
module.exports = {
  Query: {
    getUser: (parent, { id }) =>
      axios.get(`${SERVER_URI}/users/${id}`).then((res) => res.data),
    getAllUsers: (parent, args) =>
      axios.get(`${SERVER_URI}/users`).then((res) => res.data)
  },
  Mutation: {
    createUser: (parent, { id, username, name, email, password }) =>
      axios
        .post(`${SERVER_URI}/users`, { id, username, name, email, password })
        .then((res) => res.data),
    editUser: (parent, { id, username, name, email, password }) =>
      axios
        .patch(`${SERVER_URI}/users/${id}`, { id, name, email, username })
        .then((res) => res.data),
    deleteUser: (parent, { id }) =>
      axios.delete(`${SERVER_URI}/users/${id}`).then((res) => 'Deleted!!!')
  }
};
