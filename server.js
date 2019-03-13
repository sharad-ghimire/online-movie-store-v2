require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const {
  fileLoader,
  mergeTypes,
  mergeResolvers
} = require('merge-graphql-schemas');

const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, './graphql/schema'))
);
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './graphql/resolvers'))
);

const app = express();
app.use(cors('*'));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'dark'
    }
  }
});

apolloServer.applyMiddleware({ app });

app.listen(process.env.PORT, () =>
  console.log(`Server started at ${process.env.PORT}`)
);
