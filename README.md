Commit 1
-- create react app;
--npm install apollo-boost,react-apollo and graphql;

creating a client with apollo-boost
- import ApolloClient from apollo-boost
- creating a client in APP.js, client is an object that accepts a URI (single endpoint for graphQL server, can accept all queries in 1 place, all you need is a url for the graphql api you want to use).

create a headless CMS with graphCMS
- add url endpoint to client object

adding ApolloProvider from 'react-apollo'
-wrap the code you want to be usng the apollo provider, pass the prop client={client} (to use your uri)

Commit 2
--setting up graphCMS was rather easy, create a model with its fields, follow the tutorials, make a blog with title and body (id and other fields are made by graphCMS). Make sure api is open to public. try the tools in CMS to see how to explore and manipulate the data you are creating and working with. Easy way to create a quick back end.

--add graphql tag (gql) (this lets you pass a string from graphql query to turn into graphql so apollo can understand it) and import it

--testQuery was written, gql tag and backticks, write your query inside the backticks (query looks like JS object no commas)

--client.query() takes a function that will accept an object that takes in the query, i.e :
```client.query({
  query: testQuery
})```
this returns a promise so it can be worked with in that way.

--pay attention to the object that is returned when doing apollo queries, it provides other tools such as loading value to be able to track loading states. your data is nested inside of it.

Commit 3

