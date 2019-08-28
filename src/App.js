import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/cjzt2buc304sz01gj7kbnf42d/master"
});

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello world</h1>
    <Query query={POSTS_QUERY}>
      {({ loading, data }) => {
        if (loading) return "Loading...";
        const { posts } = data;
        return posts.map(post => <h1 key={post.id}>{post.title}</h1>);
      }}
    </Query>
  </ApolloProvider>
);

export default App;
