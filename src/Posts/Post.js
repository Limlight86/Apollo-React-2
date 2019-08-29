import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Post = ({ match }) => {
  return (
    <Query
      query={POST_QUERY}
      variables={{
        id: match.params.id
      }}
    >
      {({ loading, data }) => {
        if (loading) return "Loading...";
        const { post } = data;
        return (
          <div>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
          </div>
        );
      }}
    </Query>
  );
};

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;

export default Post;
