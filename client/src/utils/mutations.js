import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: String!
    $description: String
    $title: String
    $bookId: ID!
    $image: String
    $url: String
  ) {
    saveBook(
      authors: $authors
      description: $description
      title: $title
      bookId: $bookId
      image: $image
      url: $url
    ) {
      user {
        _id
        username
        bookCount
        saveBooks {
          bookId
          authors
          description
          title
          image
          url
        }
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      user {
        _id
        username
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          url
        }
      }
    }
  }
`;
