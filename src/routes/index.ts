import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { locationsRoute } from "./v1/locations";

export const router: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.register(locationsRoute, { prefix: "/locations" });
};
