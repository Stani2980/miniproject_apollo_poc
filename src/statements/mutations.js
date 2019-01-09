import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation createUser(
      $userName: String!,
      $password: String!,
      $firstName: String!,
      $lastName: String!,
      $email: EmailAddress!,
    ){
    createUser(
      input: {
        userName: $userName
        password: $password
        firstName: $firstName
        lastName: $lastName
        email: $email
      }
    ){
      userName
      password
      firstName
      email
    }
  }
`;

export const LIKE_LOCATION_BLOG = gql`
  mutation likeBlog(
      $userId: ObjectID,
      $locationBlogId: ObjectID,
    ){
    likeBlog(
        userId: $userId
        locationBlogId: $locationBlogId
    ){
      info
      likedBy
    }
  }
`;