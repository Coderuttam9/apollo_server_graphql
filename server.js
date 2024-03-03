import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import colors from "colors";

import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// config dotenv
dotenv.config();

const PORT = process.env.PORT || 3003;
// init server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// server listening

const serverListen = async () => {
  await startStandaloneServer(server, {
    listen: {
      port: PORT,
    },
  });
  console.log(`server running onn port http://localhost:${PORT}`.bgCyan.bgBlue);
};
serverListen();
