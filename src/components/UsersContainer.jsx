import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Users from './Users';

const Query = {
  Users: gql`
  query Users {
    users {
      id
      username
    }    
  }`,
}

const UsersContainer = graphql(Query.Users)(Users);

export default UsersContainer;
