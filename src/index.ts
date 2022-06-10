import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { context } from "./context";   

import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context,
    introspection: true,                                      // 1
    plugins: [ApolloServerPluginLandingPageLocalDefault()],   // 2
});

const port = process.env.PORT || 8080;

server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});