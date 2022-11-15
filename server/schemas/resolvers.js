const { Book, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context, info) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("You must login first!");
    },
  },
  Mutation: {
    //PUT User
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Error: user does not exist!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },

    //GET single User
    // getSingleUser: async (parent, args, {user_id}) => {
    //   const foundUser = await User.findOne({_id: user_id});

    //   if (!foundUser) {
    //     throw new AuthenticationError("User was not found!");
    //   }

    //   return foundUser;
    // },

    // POST new User
    createUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);
      return { token, user };
    },

    //POST new Book
    saveBook: async (parent, { user_id, book }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user_id },
          { $addToSet: { savedBooks: book } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //DELETE Book
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedBooks = await Book.findOneAndDelete(
          { _id: context.user._id },
          // { $pull: { savedBooks: { bookId: bookId } } },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return updatedBooks;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //DELETE User
    // deleteUser: async (parent, args, context) => {
    //   if(context.user){
    //     return User.findOneAndDelete({_id: context.user._id});
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};

module.exports = resolvers;
