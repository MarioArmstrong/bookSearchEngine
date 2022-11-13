const {Book, User} = require('../models');

const resolvers = {
    Query: {
      book: async () => {
        return Book.find({});
      },
      user: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return User.find(params);
      },
    },
    Mutation: {
        saveBook: async (parent, args) => {
            const saveNewBook = await Book.create(args);
            return saveNewBook;
        },
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            return newUser;
        }
    },
  };
  
  module.exports = resolvers;
  