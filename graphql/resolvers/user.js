const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/User.js');

module.exports = {
  Query: {
    login: async (root, { username, password }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) throw new Error('User does not exit');
        const passwordIsEqual = await bcrypt.compare(password, user.password);
        if (!passwordIsEqual) throw new Error('Incorrect Password');

        // If everthing is correct we have to create a token
        const token = await jwt.sign(
          {
            userId: user.id,
            username: user.username
          },
          process.env.KEY,
          { expiresIn: '1h' }
        );

        return {
          userId: user.id,
          token,
          tokenExpiration: 1
        };
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createUser: async (root, { user }) => {
      console.log(user);

      try {
        const userInDB = await User.findOne({ username: user.username });
        if (userInDB) throw new Error('User already exits');
        console.log(user.username, 'Password?');

        const hashedPassword = await bcrypt.hash(user.password, 10);
        console.log(hashedPassword);

        const newUser = new User({
          name: user.name,
          email: user.email,
          username: user.username,
          password: hashedPassword
        });

        const actualUser = await newUser.save();
        return {
          _id: actualUser.id,
          password: null,
          ...actualUser._doc
        };
      } catch (error) {
        throw error;
      }
    }
  }
};
