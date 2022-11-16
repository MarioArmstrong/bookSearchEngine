const { gql } = require("apollo-server-express");
// ! means it can never be null
// []! means that the results of the array can be null, but the array must return a number and cannot be null
//[!] means that the returned array cannot be null at all

//"me" is just an amalgamation of User and Book

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    url: String
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth!
    saveBook(
      authors: [String]
      description: String
      title: String
      bookId: ID!
      image: String
      url: String
    ): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
