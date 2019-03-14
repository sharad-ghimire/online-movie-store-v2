const _ = require('lodash');
const Movie = require('../../model/Movie');

module.exports = {
  Query: {
    getMovie: async (parent, { id }) => {
      try {
        const movie = await Movie.findById(id);
        return movie;
      } catch (error) {
        throw error;
      }
    },
    getAllMovies: async (parent, args) => {
      try {
        const movies = await Movie.find();
        return movies;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createMovie: async (parent, { movie }) => {
      const movieToSave = new Movie({
        name: movie.name,
        poster_url: movie.poster_url,
        description: movie.description,
        price: movie.price,
        quantity: movie.quantity
      });

      try {
        const savedMovie = await movieToSave.save();
        return {
          _id: savedMovie.id,
          name: savedMovie.name,
          poster_url: savedMovie.poster_url,
          description: savedMovie.description,
          price: savedMovie.price,
          quantity: savedMovie.quantity
        };
      } catch (error) {
        throw error;
      }
    }
  }
};
