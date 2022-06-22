import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omzu270q7u01w7ek6z34xv/master',
    cache: new InMemoryCache()
})