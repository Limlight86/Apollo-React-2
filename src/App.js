import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/cjzt2buc304sz01gj7kbnf42d/master"
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

client.query({
  query: testQuery
}).then(result => console.log(result))

const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello world</h1>
  </ApolloProvider>
);

export default App;
