const { gql } = require('apollo-server-express');
// ! means it can never be null
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