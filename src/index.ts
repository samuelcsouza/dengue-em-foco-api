import { fastify, FastifyInstance } from "fastify";
import { router } from "./routes";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";

const server: FastifyInstance = fastify({
  logger: true,
});

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

server.register(fastifyCors, {
  origin: ["*"],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS", "HEAD"],
});

server.register(fastifySwagger, {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "Dengue em Foco",
      description: "Univesp PI III",
      version: "0.1.0",
    },
    tags: [{ name: "Locations" }],
    // components: {
    //   securitySchemes: {
    //     apiKey: {
    //       type: "apiKey",
    //       name: "authorization",
    //       in: "header",
    //     },
    //   },
    // },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
  },
});

server.register(fastifySwaggerUi, swaggerUiOptions);

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
