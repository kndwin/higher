import "reflect-metadata";
import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { schema } from 'graphql/server/schema';
import { prisma } from 'prisma/client';

const apolloServer = new ApolloServer({
  schema ,
  context: () => ({ prisma }),
});

const cors = Cors();

const startServer = apolloServer?.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer?.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
