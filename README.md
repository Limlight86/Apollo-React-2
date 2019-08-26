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


