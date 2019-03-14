require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

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

const isAuth = require('./middleware/is-auth.js');

const app = express();
app.use(bodyParser.json());
app.use(cors('*'));
app.use(isAuth);
app.use('*', (req, res, next) => {
  console.log(req.isAuth);
  next();
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: process.env.GRAPHQL_URI,
    settings: {
      'editor.theme': 'dark'
    }
  }
});

apolloServer.applyMiddleware({ app });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
