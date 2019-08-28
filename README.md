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
```
client.query({
  query: testQuery
})
```
this returns a promise so it can be worked with in that way.

--pay attention to the object that is returned when doing apollo queries, it provides other tools such as loading value to be able to track loading states. your data is nested inside of it.

Commit 3
-- in the real world we dont write queries like above, deleted that query and imported in the Query component from 'react-apollo'.
--bring in the Query tag into your render in the component, pass it a prop called query={*queryName*} to access the data from the query.
-- when writing a query or mutation, we write its name in all caps, to reflect the constant nature of it.
--use a render prop function in order to get the data and other properties out of the query, it needs braces to open up wirting JS inside our component. It takes in a function, with an arguement of our object which can be destructured. looks something like this:
```
{({ loading, data }) => {
  if (loading) return "Loading...";
  const { posts } = data;
  return posts.map(post => <h1 key={post.id}>{post.title}</h1>);
}}
```
--using destructuring to get access of properties in our query object. inside the fucntion we can wrtie our code. Using the loading state from the apollo obkect we can determine if something is loading and do dynamic rendering. we further destructure the data from our object to just get the posts and then map over them. When using rtender props we need to specificly return what we intend to (thus writing return before the .map)
--using this method, we dont need to set anything to state or any lifecycle methods to govern the data. this is all goverened by the graphql query and avaialble to whatever gets wrapped in the query tag. There are further ways to refactor this code.

Commit 4

-- dont forget to install and use apollo dev tolls for viewing and testing queries, mutations and cache using graphiql (api explorer in graphCMS). GraphiQL automatically identfies our query and api. The dev tools will keep a bank of previous queries. Offers powerful tools to view cache, its history and keep track of state.

--Naming queries is important to identify queries when working with them and using dev tools, make sure that query has a good name for its refference. Looks like this:
```
const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`
```
--When handling errors with GraphQL its important to use your dev tools and network tab. Simple mispelling errors might be picked up by the messages since GraphQL knows your schema that you have defined. Errors are highlighted in red in the network tab, clicking on them will give you further insight as to the error with GraphQL.

Commit 5

--Using variables in your queries are very useful for when you need to filter your queries or get specific id items, like a single post of a group of posts. Passing an arguement into your query (like detailed below) will let you specificy what to look for. Using `where` and then passing it a unique identifier (usually the id) will get you the specified item. `where` takes in verious different arguements, in this case it was an object with a key value pair for the unique id (remember GraphQL looks like JS but it is not). Make sure to use double quotes when inputing this value, no single quoutes! In the future using a variable will be the common use of this feature.
```
  post(where:{id:"cjzt2gt76l6ku0a30jmw7amud"}){
  id
    title
    body
	}
```
--React Router set up - npm install react-router-dom, import the required tools to APP.js. Using BrowserRouther, Switch (only show 1 route component at a time) and Route set up routes for all posts at '/' and a specific a post at '/post/:id'. Created new components for the different routes, Post and Posts. Moved the query and all its corresponding code over to the Posts compnent and the Post component is hardcoded to be the same thing every time but we will be using variables soon to make it a dyunamic component. Using BrowserRouter Link we connected the Post entry to its indiviudal page by grabbing its unique id for the url route. gql tag queries should be put at the bottom of a file or preferably in its own file that is imported to wherever it is needed.

Commit 6