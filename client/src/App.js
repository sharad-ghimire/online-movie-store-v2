import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import config from './config';
import Home from './components/Home';
import Movies from './components/Movies';

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
            </Switch>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
