import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Movie extends Component {
  state = {
    search: ''
  };

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Navbar />
        <Query query={movie_query} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading</p>;
            if (error) console.log(error);
            console.log(data);
            const movie = data.getMovie;
            return (
              <div className='container'>
                <div key={movie._id}>
                  <h1>{movie.name}</h1>
                  <p>{movie.description}</p>
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

const movie_query = gql`
  query movie($id: ID!) {
    getMovie(id: $id) {
      name
      poster_url
      description
      price
      quantity
    }
  }
`;
export default Movie;
