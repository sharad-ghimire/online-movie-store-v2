import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Movies extends Component {
  state = {
    search: ''
  };

  render() {
    return (
      <div>
        <Navbar />
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading</p>;
            if (error) console.log(error);
            console.log(data);

            return (
              <div className='container'>
                {data.getAllMovies.map((movie) => (
                  <Link key={movie._id} to={`/movies/${movie._id}`}>
                    <h1>{movie.name}</h1>
                    <p>{movie.description}</p>
                  </Link>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

const query = gql`
  {
    getAllMovies {
      name
      poster_url
      description
      price
      quantity
      _id
    }
  }
`;
export default Movies;
