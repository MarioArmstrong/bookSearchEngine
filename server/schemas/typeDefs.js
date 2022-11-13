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
        login(email:String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors:[String], description: String, title: String, bookId: ID!, image:): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;
