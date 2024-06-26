const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    createUser: async (parent, args ) => {
      console.log('createUser');
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },
    saveBook: async (parent, { user, book }, context) => {
      if (context.user){
        return User.findOneAndUpdate(
          { _id: context.user._id},
          { $addToSet: { savedBooks: book}},
          {runValidators: true, new: true},
        );
      };
    },
    deleteBook: async (parent, { bookId }, context) => {
     if (context.user) {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: bookId }} },
        { new: true }
      )
     }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
