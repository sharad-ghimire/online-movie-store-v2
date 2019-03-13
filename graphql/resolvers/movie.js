const _ = require('lodash');
const axios = require('axios');
const SERVER_URI = 'http://localhost:3000';
module.exports = {
  Query: {
    getMovie: (parent, { id }) =>
      axios.get(`${SERVER_URI}/movies/${id}`).then((res) => res.data),
    getAllMovies: (parent, args) =>
      axios.get(`${SERVER_URI}/movies`).then((res) => res.data)
  },
  Mutation: {
    createMovie: (
      parent,
      { id, name, poster_url, description, price, quantity }
    ) =>
      axios
        .post(`${SERVER_URI}/movies`, {
          id,
          name,
          poster_url,
          description,
          price,
          quantity
        })
        .then((res) => res.data),
    editMovie: (
      parent,
      { id, name, poster_url, description, price, quantity }
    ) =>
      axios
        .patch(`${SERVER_URI}/movies/${id}`, {
          id,
          name,
          poster_url,
          description,
          price,
          quantity
        })
        .then((res) => res.data),
    deleteMovie: (parent, { id }) =>
      axios
        .delete(`${SERVER_URI}/movies/${id}`)
        .then((res) => 'Movie Deleted!!!')
  }
};
