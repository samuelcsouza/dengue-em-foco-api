import {
  fastify,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { router } from "./routes";

const server: FastifyInstance = fastify({
  logger: true,
});

server.register(router, { prefix: "/v1" });

const serverOptions = {
  port: 3000,
  host: "0.0.0.0",
};

server.listen(serverOptions, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
