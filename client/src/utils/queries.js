import { gql } from "@apollo/client";
//this is basically querying User, which includes Book through savedBooks since Book isn't a model
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
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
`;
