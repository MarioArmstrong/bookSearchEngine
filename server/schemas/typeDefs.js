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
    link: String
  }
  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
