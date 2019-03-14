import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from './config';
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: config.GRAPHQL_ENDPOINT
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/movies' component={Movies} />
              <Route exact path='/movies/:id' component={Movie} />
            </Switch>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
