import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-useast.graphcms.com/v1/cjzt2buc304sz01gj7kbnf42d/master"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
