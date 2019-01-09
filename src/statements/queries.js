import gql from "graphql-tag";

export const GET_USERS = gql`
   {
    getUsers {
      id
      userName
      firstName
    }
  }
`;

export const GET_LOCATIONBLOGS = gql`
   {
    getLocationBlogs {
      id
      info
      likedBy
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
query getUserByUsername($userName: String!) {
  getUserByUsername(userName: $userName) {
    userName
    firstName
    lastName
  }
}
`
