import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.APOLLO_CLIENT_GRAPHQL_URI ||
    "http://localhost:3050/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
