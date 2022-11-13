const { gql } = require("apollo-server-express");
// ! means it can never be null
// []! means that the results of the array can be null, but the array must return a number and cannot be null
//[!] means that the returned array cannot be null at all
const typeDefs = gql`
    type User {
        _id: ID!,
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        authors: [Strings]
        description: String
        title: String
        image:
        url: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email:String!, password: String!):

        addUser(username: String!, email: String!, password: String!):

        saveBook(authors:[String], description: String, title: String, bookId: ID!, image:):

        removeBook():


    }
`;

module.exports = typeDefs;
