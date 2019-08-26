import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/cjzt1kdb1051601ef9wjoerz5/master"
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello world</h1>
  </ApolloProvider>
);

export default App;
